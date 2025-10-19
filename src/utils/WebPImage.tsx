import React from 'react';

// Интерфейс для WebP изображения с fallback
interface WebPImageProps {
	src: string;
	webpSrc?: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
	loading?: 'lazy' | 'eager';
	itemProp?: string;
	onLoad?: () => void;
	onError?: () => void;
}

// Компонент для автоматической конвертации PNG в WebP
export const WebPImage = React.forwardRef<HTMLImageElement, WebPImageProps>(
	({ src, webpSrc, alt, className, style, loading = 'lazy', itemProp, onLoad, onError }, ref) => {
		// Автоматически генерируем WebP путь из PNG пути
		const generateWebPSrc = (originalSrc: string): string => {
			if (originalSrc.endsWith('.png')) {
				return originalSrc.replace('.png', '.webp');
			}
			if (originalSrc.endsWith('.jpg') || originalSrc.endsWith('.jpeg')) {
				return originalSrc.replace(/\.(jpg|jpeg)$/, '.webp');
			}
			return originalSrc;
		};

		const webpSource = webpSrc || generateWebPSrc(src);

		return (
			<picture>
				{/* WebP источник для современных браузеров */}
				<source srcSet={webpSource} type="image/webp" />

				{/* Fallback для старых браузеров */}
				<img
					ref={ref}
					src={src}
					alt={alt}
					className={className}
					style={style}
					loading={loading}
					itemProp={itemProp}
					onLoad={onLoad}
					onError={onError}
				/>
			</picture>
		);
	},
);

// Хук для проверки поддержки WebP
export const useWebPSupport = (): boolean => {
	const [webpSupported, setWebpSupported] = React.useState<boolean>(false);

	React.useEffect(() => {
		const checkWebPSupport = (): Promise<boolean> => {
			return new Promise((resolve) => {
				const webP = new Image();
				webP.onload = webP.onerror = () => {
					resolve(webP.height === 2);
				};
				webP.src =
					'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
			});
		};

		checkWebPSupport().then(setWebpSupported);
	}, []);

	return webpSupported;
};

// Утилита для автоматической конвертации изображений
export const convertToWebP = async (file: File, quality: number = 0.8): Promise<File> => {
	return new Promise((resolve, reject) => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();

		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;

			ctx?.drawImage(img, 0, 0);

			canvas.toBlob(
				(blob) => {
					if (blob) {
						const webpFile = new File([blob], file.name.replace(/\.[^/.]+$/, '.webp'), {
							type: 'image/webp',
						});
						resolve(webpFile);
					} else {
						reject(new Error('Failed to convert image to WebP'));
					}
				},
				'image/webp',
				quality,
			);
		};

		img.onerror = () => reject(new Error('Failed to load image'));
		img.src = URL.createObjectURL(file);
	});
};

// Утилита для получения оптимального формата изображения
export const getOptimalImageFormat = (src: string, webpSupported: boolean): string => {
	if (webpSupported && (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg'))) {
		return src.replace(/\.(png|jpg|jpeg)$/, '.webp');
	}
	return src;
};

export default WebPImage;
