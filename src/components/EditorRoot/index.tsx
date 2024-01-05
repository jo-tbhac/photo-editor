import { FC, useState } from 'react'

import { ShapeConfig } from '@/types'

import {
  useImageSource,
  useSelectedFillColor,
  useSelectedShape,
  useSelectedStrokeWidth
} from './hooks'
import { EditorRootPresenter } from './presenter'

export const EditorRoot: FC = () => {
  const [shapeConfigList, setShapeConfigList] = useState<ShapeConfig[]>([])
  const [selectedShapeIds, setSelectedShapeIds] = useState<string[]>([])

  const { imageSource, setImageSource } = useImageSource()
  const { selectedFillColor, setSelectedFillColor } = useSelectedFillColor()
  const { selectedStrokeWidth, setSelectedStrokeWidth } = useSelectedStrokeWidth()
  const { selectedShape, setSelectedShape } = useSelectedShape()

  return (
    <EditorRootPresenter
      imageSource={imageSource}
      setImageSource={setImageSource}
      selectedFillColor={selectedFillColor}
      setSelectedFillColor={setSelectedFillColor}
      selectedStrokeWidth={selectedStrokeWidth}
      setSelectedStrokeWidth={setSelectedStrokeWidth}
      selectedShape={selectedShape}
      setSelectedShape={setSelectedShape}
      shapeConfigList={shapeConfigList}
      setShapeConfigList={setShapeConfigList}
      selectedShapeIds={selectedShapeIds}
      setSelectedShapeIds={setSelectedShapeIds}
    />
  )
}
