import type { FC } from 'react'

import { useHandleChangeFillColor, useHandleChangeStrokeWidth } from './hooks'
import { ToolBarPresenter } from './presenter'
import type { ToolBarProps } from './types'

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

  const { handleChangeStrokeWidth } = useHandleChangeStrokeWidth({
    setSelectedStrokeWidth,
    selectedShapeIds,
    setShapeConfigList
  })

  return (
    <ToolBarPresenter
      selectedFillColor={selectedFillColor}
      selectedStrokeWidth={selectedStrokeWidth}
      selectedShape={selectedShape}
      setSelectedShape={setSelectedShape}
      handleChangeFillColor={handleChangeFillColor}
      handleChangeStrokeWidth={handleChangeStrokeWidth}
    />
  )
}
