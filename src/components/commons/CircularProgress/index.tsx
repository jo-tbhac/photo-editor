import MUICircularProgress from '@mui/material/CircularProgress'
import { FC } from 'react'

import { CircularProgressProps } from './types'

export const CircularProgress: FC<CircularProgressProps> = (props) => {
  return <MUICircularProgress {...props} />
}
