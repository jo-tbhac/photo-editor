import type { MouseEvent, ReactNode } from 'react'

export interface ToolBarButtonProps {
  tooltipText: string
  active: boolean
  Icon: ReactNode
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export type ToolBarButtonPresenterProps = ToolBarButtonProps
