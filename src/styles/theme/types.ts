import type { colors } from './colors'
import type { styles } from './styles'

export interface AppColors {
  app: typeof colors.app
  font: typeof colors.font
  background: typeof colors.background
  border: typeof colors.border
  button: typeof colors.button
  outline: typeof colors.outline
}

export interface AppStyles {
  borderRadius: typeof styles.borderRadius
  boxShadow: typeof styles.boxShadow
  fontSize: typeof styles.fontSize
  fontWeight: typeof styles.fontWeight
  lineHeight: typeof styles.lineHeight
  opacity: typeof styles.opacity
  outline: typeof styles.outline
  margin: typeof styles.margin
  padding: typeof styles.padding
}
