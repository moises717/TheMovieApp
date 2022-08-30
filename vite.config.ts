import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@layout': '/src/layout',
			'@components': '/src/components',
			'@pages': '/src/pages',
			'@utils': '/src/utils',
			'@assets': '/src/assets',
			'@styles': '/src/styles',
			'@hooks': '/src/hooks',
			'@constants': '/src/constants',
			'@router': '/src/router',
			'@services': '/src/services',
		},
	},
});
