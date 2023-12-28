import MUIButton from '@mui/material/Button'
import { FC } from 'react'

import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props) => {
  return <MUIButton {...props} />
}
