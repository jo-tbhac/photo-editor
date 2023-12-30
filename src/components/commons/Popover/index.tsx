import MUIPopover from '@mui/material/Popover'
import { FC, forwardRef } from 'react'
import { PopoverProps } from './types'

export const Popover: FC<PopoverProps> = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  return <MUIPopover {...props} ref={ref} />
})
