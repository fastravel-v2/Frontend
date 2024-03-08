import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({ typescript: true }),
		ViteSvgSpriteWrapper({
			// sprite 이미지 만들 입력 폴더
			icons: './src/assets/icons/*.svg',
			// sprite 이미지 출력 폴더
			outputDir: 'public/icons',
			// 옵션 : https://bit.ly/3EuIYDR
			sprite: {},
		}),
	],
})
