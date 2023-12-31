export interface ToolBarProps {
  selectedFillColor: string
  setSelectedFillColor: (fillColor: string) => void
  selectedStrokeWidth: number
  setSelectedStrokeWidth: (strokeWidth: number) => void
}

export type ToolBarPresenterProps = ToolBarProps
