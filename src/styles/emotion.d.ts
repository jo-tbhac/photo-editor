import '@emotion/react'
import { AppColors, AppStyles } from './theme'

declare module '@emotion/react' {
  export interface Theme {
    colors: AppColors
    styles: AppStyles
  }
}
