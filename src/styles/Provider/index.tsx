import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { FC, useMemo } from 'react'
import { colors, styles } from '../theme'
import { ThemeProviderProps } from './types'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(() => ({ colors, styles }), [])

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
