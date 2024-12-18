import { PropsWithChildren, useState } from 'react'

import { ThemeContext } from './context'
import { getDefaultTheme, updateTheme } from './lib'
import { ThemeContextState } from './types'
import { Theme } from '@/shared'

type Props = PropsWithChildren & {
  initialTheme?: Theme
}

export function Provider({ children, initialTheme }: Props) {
  const [theme, setTheme] = useState(initialTheme || getDefaultTheme())

  const value: ThemeContextState = {
    theme,
    setTheme: (theme) => {
      setTheme(theme)
      updateTheme(theme)
    },
  }

  return <ThemeContext value={value}>{children}</ThemeContext>
}
