import { createContext, useContext } from 'react'

import { ThemeContextState } from './types'
import { Theme } from '@/shared'

export const ThemeContext = createContext<ThemeContextState>({
  theme: Theme.System,
  setTheme: () => null,
})

export const useThemeContext = () => useContext(ThemeContext)
