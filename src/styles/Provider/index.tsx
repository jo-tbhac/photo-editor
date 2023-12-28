import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { FC, useMemo } from 'react'

import { colors, styles } from '../theme'
import { ThemeProviderProps } from './types'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(() => ({ colors, styles }), [])

  const muiTheme = useMemo(() => {
    return createTheme({
      palette: { primary: colors.app.primary }
    })
  }, [])

  return (
    <EmotionThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </EmotionThemeProvider>
  )
}
