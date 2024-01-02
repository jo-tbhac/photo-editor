import Konva from 'konva'
import { Dispatch, SetStateAction } from 'react'

import { LinePointsPosition, ShapeConfig } from '@/types'

export interface LineTransformerProps {
  lineElement: Konva.Line | Konva.Arrow | null
  position: { x1: number; y1: number; x2: number; y2: number }
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setTransformerPosition: Dispatch<SetStateAction<LinePointsPosition | null>>
}
