import type { FC } from 'react'
import MUIAlert from '@mui/material/Alert'
import type { AlertProps } from './types'

export const Alert: FC<AlertProps> = (props) => {
  return <MUIAlert {...props} />
}
