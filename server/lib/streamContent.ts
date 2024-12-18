import { ABORT_DELAY, HTML_KEY } from '../constants'
import { Transform } from 'node:stream'
import { Request, Response } from 'express'
import { AppProps, Render } from '@/shared'

type Args = {
  html: string
  app?: AppProps
  req: Request
  res: Response
  render: Render
}

export function streamContent({ render, res, req, html, app }: Args) {
  let renderFailed = false

  const { pipe, abort } = render({
    app,
    url: req.url,
    options: {
      onShellError() {
        res.status(500).set({ 'Content-Type': 'text/html' }).send('<pre>Something went wrong</pre>')
      },
      onShellReady() {
        res.status(renderFailed ? 500 : 200).set({ 'Content-Type': 'text/html' })

        const [htmlStart, htmlEnd] = html.split(HTML_KEY)
        res.write(htmlStart)

        const transformStream = new Transform({
          transform(chunk, encoding, callback) {
            res.write(chunk, encoding)
            callback()
          },
        })

        transformStream.on('finish', () => {
          res.end(htmlEnd)
        })

        pipe(transformStream)
      },
      onError(error) {
        renderFailed = true
        console.error((error as Error).stack)
      },
    },
  })

  setTimeout(abort, ABORT_DELAY)
}
