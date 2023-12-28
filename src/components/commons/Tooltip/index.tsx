import { FC } from 'react'
import MUITooltip from '@mui/material/Tooltip'
import { TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = (props) => {
  return <MUITooltip {...props} />
}
