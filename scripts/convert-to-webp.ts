import sharp from 'sharp';
import fs from 'fs';
import path from 'path';


const CONVERSION_CONFIG = {
	quality: 80,
	effort: 6,
	lossless: false,
};


async function convertPNGToWebP(inputPath: string, outputPath: string): Promise<void> {
	try {
		await sharp(inputPath).webp(CONVERSION_CONFIG).toFile(outputPath);

		console.log(`V ${inputPath} → ${outputPath}`);
	} catch (error) {
		console.error(`X ${inputPath}:`, error);
	}
}


function findPNGFiles(dir: string): string[] {
	const pngFiles: string[] = [];

	function scanDirectory(currentDir: string) {
		const files = fs.readdirSync(currentDir);

		for (const file of files) {
			const filePath = path.join(currentDir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
					scanDirectory(filePath);
				}
			} else if (file.toLowerCase().endsWith('.png')) {
				pngFiles.push(filePath);
			}
		}
	}

	scanDirectory(dir);
	return pngFiles;
}

async function convertAllPNGToWebP(sourceDir: string = 'src/assets/img'): Promise<void> {


	const pngFiles = findPNGFiles(sourceDir);

	if (pngFiles.length === 0) {

		return;
	}




	const webpDir = path.join(sourceDir, 'webp');
	if (!fs.existsSync(webpDir)) {
		fs.mkdirSync(webpDir, { recursive: true });
	}


	for (const pngFile of pngFiles) {
		const relativePath = path.relative(sourceDir, pngFile);
		const webpPath = path.join(webpDir, relativePath.replace('.png', '.webp'));


		const webpDirPath = path.dirname(webpPath);
		if (!fs.existsSync(webpDirPath)) {
			fs.mkdirSync(webpDirPath, { recursive: true });
		}

		await convertPNGToWebP(pngFile, webpPath);
	}


}


function generateImageMapping(sourceDir: string = 'src/assets/img'): void {
	const mapping: Record<string, string> = {};

	function scanDirectory(currentDir: string, baseDir: string) {
		const files = fs.readdirSync(currentDir);

		for (const file of files) {
			const filePath = path.join(currentDir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				if (!['node_modules', '.git', 'dist', 'build', 'webp'].includes(file)) {
					scanDirectory(filePath, baseDir);
				}
			} else if (file.toLowerCase().endsWith('.png')) {
				const relativePath = path.relative(baseDir, filePath);
				const webpPath = relativePath.replace('.png', '.webp');
				mapping[relativePath] = webpPath;
			}
		}
	}

	scanDirectory(sourceDir, sourceDir);


	const mappingPath = path.join(sourceDir, 'image-mapping.json');
	fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));

	console.log('📄 Image mapping saved to:', mappingPath);
}


export { convertPNGToWebP, convertAllPNGToWebP, generateImageMapping, findPNGFiles };


if (require.main === module) {
	const sourceDir = process.argv[2] || 'src/assets/img';

	convertAllPNGToWebP(sourceDir)
		.then(() => generateImageMapping(sourceDir))
		.catch(console.error);
}
