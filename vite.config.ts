import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
						active: false,
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
			webp: {
				quality: 80,
			},
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "bootstrap/scss/bootstrap";`,
			},
			less: {
				javascriptEnabled: true,
			},
		},
	},
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
						return `assets/images/[name]-[hash][extname]`;
					}
					if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
						return `assets/fonts/[name]-[hash][extname]`;
					}
					return `assets/[name]-[hash][extname]`;
				},
			},
		},
	},
});
