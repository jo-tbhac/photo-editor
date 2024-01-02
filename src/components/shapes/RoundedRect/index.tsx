import { FC } from 'react'
import { Rect as KonvaRect } from 'react-konva'

import { RoundedRectProps } from './types'

export const RoundedRect: FC<RoundedRectProps> = (props) => {
  return <KonvaRect {...props} />
}
