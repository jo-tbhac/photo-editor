import type Konva from 'konva'
import type { Dispatch, SetStateAction } from 'react'

import type { LinePointsPosition, ShapeConfig } from '@/types'

export interface LineTransformerProps {
  lineElement: Konva.Line | Konva.Arrow | null
  position: { x1: number; y1: number; x2: number; y2: number }
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setTransformerPosition: Dispatch<SetStateAction<LinePointsPosition | null>>
}
