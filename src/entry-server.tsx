import { renderToPipeableStream } from 'react-dom/server'

import { StaticRouter } from 'react-router'
import { App } from './components/App'
import { Render } from '@/shared'

export const render: Render = ({ url, app, options }) => {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App {...app} />
    </StaticRouter>,
    options,
  )
}
