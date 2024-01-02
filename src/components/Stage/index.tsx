import Konva from 'konva'
import { FC, useRef, useState } from 'react'

import { ShapeConfig } from '@/types'

import { useDrawShape, useImage, useImageSize } from './hooks'
import { StagePresenter } from './presenter'
import { StageProps } from './types'

export const Stage: FC<StageProps> = ({
  imageSource,
  selectedFillColor,
  selectedStrokeWidth,
  selectedShape
}) => {
  const stageRef = useRef<Konva.Stage>(null)
  const drawLayerRef = useRef<Konva.Layer>(null)

  const [shapeConfigList, setShapeConfigList] = useState<ShapeConfig[]>([])

  const imageElement = useImage(imageSource)
  const imageSize = useImageSize(imageElement)

  const { handleMouseDownStage } = useDrawShape({
    stageElement: stageRef.current,
    drawLayerElement: drawLayerRef.current,
    selectedFillColor,
    selectedStrokeWidth,
    selectedShape,
    setShapeConfigList
  })

  return (
    <StagePresenter
      stageRef={stageRef}
      drawLayerRef={drawLayerRef}
      imageElement={imageElement}
      imageSize={imageSize}
      shapeConfigList={shapeConfigList}
      handleMouseDownStage={handleMouseDownStage}
    />
  )
}
