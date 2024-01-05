import { FC } from 'react'

import { useHandleChangeFillColor } from './hooks'
import { ToolBarPresenter } from './presenter'
import { ToolBarProps } from './types'

export const ToolBar: FC<ToolBarProps> = ({
  selectedFillColor,
  setSelectedFillColor,
  selectedStrokeWidth,
  setSelectedStrokeWidth,
  selectedShape,
  setSelectedShape,
  selectedShapeIds,
  setShapeConfigList
}) => {
  const { handleChangeFillColor } = useHandleChangeFillColor({
    setSelectedFillColor,
    selectedShapeIds,
    setShapeConfigList
  })

  return (
    <ToolBarPresenter
      selectedFillColor={selectedFillColor}
      selectedStrokeWidth={selectedStrokeWidth}
      setSelectedStrokeWidth={setSelectedStrokeWidth}
      selectedShape={selectedShape}
      setSelectedShape={setSelectedShape}
      handleChangeFillColor={handleChangeFillColor}
    />
  )
}
