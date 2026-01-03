import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''
const base = isGitHubPages && repoName ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
