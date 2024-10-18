import '@emotion/react'
import type { Theme as MUITheme } from '@mui/material/styles'

import type { AppColors, AppStyles } from './theme'

declare module '@emotion/react' {
  export interface Theme extends MUITheme {
    colors: AppColors
    styles: AppStyles
  }
}
