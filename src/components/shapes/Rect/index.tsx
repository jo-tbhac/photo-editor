import { FC } from 'react'
import { Rect as KonvaRect } from 'react-konva'

import { RectProps } from './types'

export const Rect: FC<RectProps> = (props) => {
  return <KonvaRect {...props} />
}
