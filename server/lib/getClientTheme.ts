import { Request } from 'express'
import { CLIENT_THEME_COOKIE_KEY, Theme } from '@/shared'
import { parse } from 'cookie'

export function getClientTheme(req: Request) {
  const cookies = parse(req.headers.cookie || '')
  return cookies?.[CLIENT_THEME_COOKIE_KEY] as Theme | undefined
}
