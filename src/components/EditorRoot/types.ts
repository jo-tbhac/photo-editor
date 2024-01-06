import Konva from 'konva'
import { Dispatch, SetStateAction } from 'react'

import { ShapeConfig, Shapes } from '@/types'

export interface EditorRootPresenterProps {
  stageElement: Konva.Stage | null
  stageRefCallback: (node: Konva.Stage) => void
  imageElement: HTMLImageElement | undefined
  setImageSource: (source: string | null) => void
  selectedFillColor: string
  setSelectedFillColor: (fillColor: string) => void
  selectedStrokeWidth: number
  setSelectedStrokeWidth: (strokeWidth: number) => void
  selectedShape: Shapes | null
  setSelectedShape: (shape: Shapes | null) => void
  shapeConfigList: ShapeConfig[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  selectedShapeIds: string[]
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}
