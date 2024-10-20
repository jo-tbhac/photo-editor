import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { type FC, useMemo } from 'react'

import { colors, styles } from '../theme'
import type { ThemeProviderProps } from './types'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(() => ({ colors, styles }), [])

  const muiTheme = useMemo(() => {
    return createTheme({
      palette: { primary: colors.app.primary },
      typography: {
        fontFamily: ['Noto Sans JP', 'sans-serif'].join(',')
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              boxShadow: 'initial',
              fontWeight: styles.fontWeight.normal,
              padding: `${styles.padding.xxSmall} ${styles.padding.small}`,
              textTransform: 'none'
            }
          }
        }
      }
    })
  }, [])

  return (
    <EmotionThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </EmotionThemeProvider>
  )
}
