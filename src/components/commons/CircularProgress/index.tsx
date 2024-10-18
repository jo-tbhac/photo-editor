import MUICircularProgress from '@mui/material/CircularProgress'
import type { FC } from 'react'

import type { CircularProgressProps } from './types'

export const CircularProgress: FC<CircularProgressProps> = (props) => {
  return <MUICircularProgress {...props} />
}
