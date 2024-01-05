import Konva from 'konva'
import { FC, useRef, useState } from 'react'

import { ShapeConfig, TextEditorPosition } from '@/types'

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
  const [selectedShapeIds, setSelectedShapeIds] = useState<string[]>([])
  const [textEditorPosition, setTextEditorPosition] = useState<TextEditorPosition | null>(null)

  const imageElement = useImage(imageSource)
  const imageSize = useImageSize(imageElement)

  const { handleMouseDownStage } = useDrawShape({
    stageElement: stageRef.current,
    drawLayerElement: drawLayerRef.current,
    selectedFillColor,
    selectedStrokeWidth,
    selectedShape,
    setShapeConfigList,
    setTextEditorPosition
  })

  // 図形の描画と選択が競合しないようにする
  const disabledSelect = selectedShape != null

  return (
    <StagePresenter
      stageRef={stageRef}
      drawLayerRef={drawLayerRef}
      imageElement={imageElement}
      imageSize={imageSize}
      selectedFillColor={selectedFillColor}
      disabledSelect={disabledSelect}
      shapeConfigList={shapeConfigList}
      setShapeConfigList={setShapeConfigList}
      selectedShapeIds={selectedShapeIds}
      setSelectedShapeIds={setSelectedShapeIds}
      textEditorPosition={textEditorPosition}
      setTextEditorPosition={setTextEditorPosition}
      handleMouseDownStage={handleMouseDownStage}
    />
  )
}
