import type { FC } from 'react'

import { ToolBarButtonPresenter } from './presenter'
import type { ToolBarButtonProps } from './types'

export const ToolBarButton: FC<ToolBarButtonProps> = (props) => {
  return <ToolBarButtonPresenter {...props} />
}
