import { Shapes } from '@/types'

export interface ToolBarProps {
  selectedFillColor: string
  setSelectedFillColor: (fillColor: string) => void
  selectedStrokeWidth: number
  setSelectedStrokeWidth: (strokeWidth: number) => void
  selectedShape: Shapes | null
  setSelectedShape: (shape: Shapes | null) => void
}

export type ToolBarPresenterProps = ToolBarProps
