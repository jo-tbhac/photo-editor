import '@emotion/react'
import { Theme as MUITheme } from '@mui/material/styles'

import { AppColors, AppStyles } from './theme'

declare module '@emotion/react' {
  export interface Theme extends MUITheme {
    colors: AppColors
    styles: AppStyles
  }
}
