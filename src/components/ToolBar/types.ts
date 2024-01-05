import { Dispatch, SetStateAction } from 'react'

import { ShapeConfig, Shapes } from '@/types'

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
  setSelectedStrokeWidth: (strokeWidth: number) => void
  selectedShape: Shapes | null
  setSelectedShape: (shape: Shapes | null) => void
  handleChangeFillColor: (fillColor: string) => void
}
