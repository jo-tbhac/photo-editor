import type { FC } from 'react'
import MUITooltip from '@mui/material/Tooltip'
import type { TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = (props) => {
  return <MUITooltip {...props} />
}
