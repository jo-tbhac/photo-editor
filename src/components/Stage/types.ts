import Konva from 'konva'
import { Dispatch, RefObject, SetStateAction } from 'react'

import { ShapeConfig, Shapes } from '@/types'

export interface StageProps {
  imageSource: string
  selectedFillColor: string
  selectedStrokeWidth: number
  selectedShape: Shapes | null
}

export interface StagePresenterProps {
  stageRef: RefObject<Konva.Stage>
  drawLayerRef: RefObject<Konva.Layer>
  imageElement: HTMLImageElement | undefined
  imageSize: { height: number; width: number } | undefined
  disabledSelect: boolean
  shapeConfigList: ShapeConfig[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  selectedShapeIds: string[]
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
  handleMouseDownStage: (event: Konva.KonvaEventObject<MouseEvent>) => void
}
