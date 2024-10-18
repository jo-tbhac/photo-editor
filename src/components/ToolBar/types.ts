import type { Dispatch, SetStateAction } from 'react'

import type { ShapeConfig, Shapes } from '@/types'

export interface ToolBarProps {
  selectedFillColor: string
  setSelectedFillColor: (fillColor: string) => void
  selectedStrokeWidth: number
  setSelectedStrokeWidth: (strokeWidth: number) => void
  selectedShape: Shapes | null
  setSelectedShape: (shape: Shapes | null) => void
  selectedShapeIds: string[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
}

export interface ToolBarPresenterProps {
  selectedFillColor: string
  selectedStrokeWidth: number
  selectedShape: Shapes | null
  setSelectedShape: (shape: Shapes | null) => void
  handleChangeFillColor: (fillColor: string) => void
  handleChangeStrokeWidth: (strokeWidth: number) => void
}
