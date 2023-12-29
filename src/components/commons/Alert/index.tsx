import { FC } from 'react'
import MUIAlert from '@mui/material/Alert'
import { AlertProps } from './types'

export const Alert: FC<AlertProps> = (props) => {
  return <MUIAlert {...props} />
}
