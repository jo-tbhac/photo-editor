import MUIPopover from '@mui/material/Popover'
import { type FC, forwardRef } from 'react'
import type { PopoverProps } from './types'

export const Popover: FC<PopoverProps> = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  return <MUIPopover {...props} ref={ref} />
})
