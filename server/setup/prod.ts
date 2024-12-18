import fs from 'fs'
import path from 'path'

import compression from 'compression'
import sirv from 'sirv'
import { SetupArgs } from '@/server/setup/types'

const CLIENT_PATH = path.resolve(process.cwd(), 'dist/client')
const HTML_PATH = path.resolve(process.cwd(), 'dist/client/index.html')
const ENTRY_SERVER_PATH = path.resolve(process.cwd(), 'dist/ssr/entry-server.js')

export async function setupProd({ app, renderHTML }: SetupArgs) {
  app.use(compression())
  app.use(sirv(CLIENT_PATH, { extensions: [] }))

  app.get('*', async (req, res, next) => {
    try {
      const html = fs.readFileSync(HTML_PATH, 'utf-8')
      const { render } = await import(ENTRY_SERVER_PATH)

      await renderHTML({ req, res, render, html })
    } catch (e) {
      console.error((e as Error).stack)
      next(e)
    }
  })
}
