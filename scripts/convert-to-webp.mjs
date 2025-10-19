import sharp from 'sharp';
import fs from 'fs';
import path from 'path';


const CONVERSION_CONFIG = {
    quality: 90,
    effort: 6,
    lossless: false,
};


async function convertPNGToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp(CONVERSION_CONFIG)
            .toFile(outputPath);

        console.log(`V ${inputPath} → ${outputPath}`);
    } catch (error) {
        console.error(`X ${inputPath}:`, error);
    }
}


function findPNGFiles(dir) {
    const pngFiles = [];

    function scanDirectory(currentDir) {
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


async function convertAllPNGToWebP(sourceDir = 'src/assets/img') {


    if (!fs.existsSync(sourceDir)) {

        return;
    }

    const pngFiles = findPNGFiles(sourceDir);

    if (pngFiles.length === 0) {

        return;
    }




    for (const pngFile of pngFiles) {
        const webpPath = pngFile.replace('.png', '.webp');
        await convertPNGToWebP(pngFile, webpPath);
    }


}

const sourceDir = process.argv[2] || 'src/assets/img';
convertAllPNGToWebP(sourceDir).catch(console.error);