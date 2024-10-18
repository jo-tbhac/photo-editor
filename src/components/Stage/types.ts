import type * as CSS from 'csstype'
import type Konva from 'konva'
import type { Dispatch, RefObject, SetStateAction } from 'react'

import type { ShapeConfig, Shapes, TextEditorPosition } from '@/types'

export interface StageProps {
  stageElement: Konva.Stage | null
  stageRefCallback: (node: Konva.Stage) => void
  imageElement: HTMLImageElement
  selectedFillColor: string
  selectedStrokeWidth: number
  selectedShape: Shapes | null
  shapeConfigList: ShapeConfig[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  selectedShapeIds: string[]
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
  setSelectedShape: (shape: Shapes | null) => void
}

export interface StagePresenterProps {
  stageRefCallback: (node: Konva.Stage) => void
  drawLayerRef: RefObject<Konva.Layer>
  imageElement: HTMLImageElement
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
  handleMouseDownStageContainer: () => void
  cursorStyle: CSS.Property.Cursor
}
