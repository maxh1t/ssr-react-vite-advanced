import { Theme } from '@/shared'
import { clientThemeStore, serverThemeStore } from '@/client/lib/stores'
import { SSR } from '@/client/constants'

export function getDefaultTheme(): Theme {
  const theme = (clientThemeStore.get() as Theme) || Theme.System

  updateTheme(theme)
  return theme
}

export function updateTheme(theme: Theme) {
  if (SSR) return

  let resolveTheme = theme
  if (theme === Theme.System) {
    resolveTheme = getSystemTheme()
  }

  clientThemeStore.set(theme)
  serverThemeStore.set(resolveTheme)

  window.document.documentElement.classList.toggle('dark', resolveTheme === Theme.Dark)
}

function getSystemTheme() {
  if (SSR) return Theme.Light
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light
}
