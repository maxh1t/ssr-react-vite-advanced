import { Request } from 'express'

import { parse } from 'cookie'
import { SERVER_THEME_COOKIE_KEY, Theme } from '@/shared'

type Args = {
  req: Request
  html: string
}

export function applyServerTheme({ req, html }: Args): string {
  const cookies = parse(req.headers.cookie || '')
  const theme = cookies?.[SERVER_THEME_COOKIE_KEY]

  if (theme === Theme.Dark) {
    return html.replace('<html lang="en">', `<html lang="en" class="dark">`)
  }

  return html
}
