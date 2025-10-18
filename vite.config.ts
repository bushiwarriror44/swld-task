import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "bootstrap/scss/bootstrap";`,
			},
			less: {
				// Настройки для Less
				javascriptEnabled: true,
				modifyVars: {
					// Здесь можно переопределить переменные Less
				},
				// Автоматический импорт переменных и миксинов
				// additionalData: `@import "src/less/core/variables.less"; @import "src/less/core/mixins.less";`,
			},
		},
	},
});
