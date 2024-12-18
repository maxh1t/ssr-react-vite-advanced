import { Theme } from '@/shared'

export type ThemeContextState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
