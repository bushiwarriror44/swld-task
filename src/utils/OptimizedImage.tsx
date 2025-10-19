import React from 'react';

interface OptimizedImageProps {
	src: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
	loading?: 'lazy' | 'eager';
	itemProp?: string;
	onLoad?: () => void;
	onError?: () => void;
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
	({ src, alt, className, style, loading = 'lazy', itemProp, onLoad, onError }, ref) => {
		const [useWebP, setUseWebP] = React.useState(false);
		const [webpChecked, setWebpChecked] = React.useState(false);

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

			const checkWebPAvailability = async (webpSrc: string): Promise<boolean> => {
				return new Promise((resolve) => {
					const img = new Image();
					img.onload = () => resolve(true);
					img.onerror = () => resolve(false);
					img.src = webpSrc;
				});
			};

			const initImage = async () => {
				const webpSupported = await checkWebPSupport();

				if (webpSupported && src.endsWith('.png')) {
					const webpSrc = src.replace('.png', '.webp');
					const webpAvailable = await checkWebPAvailability(webpSrc);
					setUseWebP(webpAvailable);
				}

				setWebpChecked(true);
			};

			initImage();
		}, [src]);

		const imageSrc = useWebP && src.endsWith('.png') ? src.replace('.png', '.webp') : src;

		if (!webpChecked) {
			return (
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
			);
		}

		return (
			<img
				ref={ref}
				src={imageSrc}
				alt={alt}
				className={className}
				style={style}
				loading={loading}
				itemProp={itemProp}
				onLoad={onLoad}
				onError={onError}
			/>
		);
	},
);

export default OptimizedImage;
