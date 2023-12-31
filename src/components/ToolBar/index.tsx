import { FC } from 'react'

import { ToolBarPresenter } from './presenter'
import { ToolBarProps } from './types'

export const ToolBar: FC<ToolBarProps> = ({
  selectedFillColor,
  setSelectedFillColor,
  selectedStrokeWidth,
  setSelectedStrokeWidth,
  selectedShape,
  setSelectedShape
}) => {
  return (
    <ToolBarPresenter
      selectedFillColor={selectedFillColor}
      setSelectedFillColor={setSelectedFillColor}
      selectedStrokeWidth={selectedStrokeWidth}
      setSelectedStrokeWidth={setSelectedStrokeWidth}
      selectedShape={selectedShape}
      setSelectedShape={setSelectedShape}
    />
  )
}
