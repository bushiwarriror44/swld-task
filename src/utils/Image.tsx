import React from 'react';

interface ImageProps {
	src: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
	loading?: 'lazy' | 'eager';
	itemProp?: string;
	onLoad?: () => void;
	onError?: () => void;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	({ src, alt, className, style, loading = 'lazy', itemProp, onLoad, onError }, ref) => {
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
	},
);

export default Image;
