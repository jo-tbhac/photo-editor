import MUIIconButton from '@mui/material/IconButton'
import { forwardRef } from 'react'

import { IconButtonProps } from './types'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  return <MUIIconButton ref={ref} {...props} />
})
