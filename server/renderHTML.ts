import { applyServerTheme } from '@/server/lib/applyServerTheme'
import { streamContent } from '@/server/lib/streamContent'
import { getClientTheme } from '@/server/lib/getClientTheme'
import { getProfile } from '@/server/lib/getProfile'
import { applyInitialData } from '@/server/lib/applyInitialData'
import { Request, Response } from 'express'
import { Render } from '@/shared'

export type RenderHTMLArgs = {
  req: Request
  res: Response
  render: Render
  html: string
}

export async function renderHTML({ req, html, ...args }: RenderHTMLArgs) {
  const profile = await getProfile()

  html = applyServerTheme({ html, req })
  html = applyInitialData({ html, profile })

  streamContent({
    req,
    html,
    app: { theme: getClientTheme(req), profile },
    ...args,
  })
}
