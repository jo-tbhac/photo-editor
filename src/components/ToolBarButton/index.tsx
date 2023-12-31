import { FC } from 'react'

import { ToolBarButtonPresenter } from './presenter'
import { ToolBarButtonProps } from './types'

export const ToolBarButton: FC<ToolBarButtonProps> = (props) => {
  return <ToolBarButtonPresenter {...props} />
}
