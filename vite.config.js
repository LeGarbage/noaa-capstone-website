import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base: '/noaa-capstone-website/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                mentor: resolve(__dirname, 'mentor.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
                progress: resolve(__dirname, 'progress.html'),
                resources: resolve(__dirname, 'resources.html'),
                team: resolve(__dirname, 'team.html'),
            }
        }
    }
});
