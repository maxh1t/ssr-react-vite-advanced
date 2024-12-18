import fs from 'fs'
import path from 'path'
import { SetupArgs } from '@/server/setup/types'

const HTML_PATH = path.resolve(process.cwd(), 'index.html')
const ENTRY_SERVER_PATH = path.resolve(process.cwd(), 'src/entry-server.tsx')

export async function setupDev({ app, renderHTML }: SetupArgs) {
  const vite = await (
    await import('vite')
  ).createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.get('*', async (req, res, next) => {
    try {
      let html = fs.readFileSync(HTML_PATH, 'utf-8')
      html = await vite.transformIndexHtml(req.originalUrl, html)
      const { render } = await vite.ssrLoadModule(ENTRY_SERVER_PATH)

      await renderHTML({ req, res, render, html })
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      console.error((e as Error).stack)
      next(e)
    }
  })
}
