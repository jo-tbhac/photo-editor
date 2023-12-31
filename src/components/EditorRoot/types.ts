import { Shapes } from '@/types'

export interface EditorRootPresenterProps {
  imageSource: string | null
  setImageSource: (source: string | null) => void
  selectedFillColor: string
  setSelectedFillColor: (fillColor: string) => void
  selectedStrokeWidth: number
  setSelectedStrokeWidth: (strokeWidth: number) => void
  selectedShape: Shapes | null
  setSelectedShape: (shape: Shapes | null) => void
}
