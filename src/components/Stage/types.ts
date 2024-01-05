import Konva from 'konva'
import { Dispatch, RefObject, SetStateAction } from 'react'

import { ShapeConfig, Shapes, TextEditorPosition } from '@/types'

export interface StageProps {
  imageSource: string
  selectedFillColor: string
  selectedStrokeWidth: number
  selectedShape: Shapes | null
  shapeConfigList: ShapeConfig[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  selectedShapeIds: string[]
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}

export interface StagePresenterProps {
  stageRef: RefObject<Konva.Stage>
  drawLayerRef: RefObject<Konva.Layer>
  imageElement: HTMLImageElement | undefined
  imageSize: { height: number; width: number } | undefined
  selectedFillColor: string
  disabledSelect: boolean
  shapeConfigList: ShapeConfig[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  selectedShapeIds: string[]
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
  textEditorPosition: TextEditorPosition | null
  setTextEditorPosition: Dispatch<SetStateAction<TextEditorPosition | null>>
  handleMouseDownStage: (event: Konva.KonvaEventObject<MouseEvent>) => void
}
