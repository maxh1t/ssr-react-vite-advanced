import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { dependencies } from './package.json'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  ssr: {
    noExternal: mode === 'production' ? Object.keys(dependencies) : undefined,
  },
  resolve: {
    alias: {
      '@/shared': path.resolve(__dirname, 'shared'),
      '@/client': path.resolve(__dirname, 'src'),
      '@/server': path.resolve(__dirname, 'server'),
    },
  },
}))
