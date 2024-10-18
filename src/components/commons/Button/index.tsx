import MUIButton from '@mui/material/Button'
import type { FC } from 'react'

import type { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props) => {
  return <MUIButton {...props} />
}
