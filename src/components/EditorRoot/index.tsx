import Konva from 'konva'
import { FC, useState } from 'react'

import { useRefCallback } from '@/hooks'
import { ShapeConfig } from '@/types'

import {
  useHandleKeyDown,
  useImage,
  useSelectedFillColor,
  useSelectedShape,
  useSelectedStrokeWidth
} from './hooks'
import { EditorRootPresenter } from './presenter'

export const EditorRoot: FC = () => {
  const [stageElement, stageRefCallback] = useRefCallback<Konva.Stage>()

  const [shapeConfigList, setShapeConfigList] = useState<ShapeConfig[]>([])
  const [selectedShapeIds, setSelectedShapeIds] = useState<string[]>([])

  const { selectedFillColor, setSelectedFillColor } = useSelectedFillColor()
  const { selectedStrokeWidth, setSelectedStrokeWidth } = useSelectedStrokeWidth()
  const { selectedShape, setSelectedShape } = useSelectedShape()
  const { imageElement, setImageSource } = useImage()

  useHandleKeyDown({
    selectedShapeIds,
    setSelectedShapeIds,
    setShapeConfigList,
    setSelectedShape
  })

  return (
    <EditorRootPresenter
      stageElement={stageElement}
      stageRefCallback={stageRefCallback}
      imageElement={imageElement}
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
