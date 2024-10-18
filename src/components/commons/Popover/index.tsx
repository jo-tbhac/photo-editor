import MUIPopover from '@mui/material/Popover'
import { forwardRef } from 'react'
import type { PopoverProps } from './types'

export const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  return <MUIPopover {...props} ref={ref} />
})
