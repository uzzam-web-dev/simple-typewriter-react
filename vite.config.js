import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
	plugins: [
		react(),
		libInjectCss()
	],
	build: {
		lib: {
			name: "simple-typewriter-react",
			entry: "./lib/index.js",
			formats: ['es', 'cjs'],
			fileName: (format) => `simple-typewriter-react.${format}.js`,
		},
		copyPublicDir: false,
		rollupOptions: {
			external: ['react', 'react/jsx-runtime']
		}
	}
})
