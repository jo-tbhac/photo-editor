import Konva from 'konva'
import { FC, useRef, useState } from 'react'

import { TextEditorPosition } from '@/types'

import { useCursorStyle, useDrawShape, useImageSize } from './hooks'
import { StagePresenter } from './presenter'
import { StageProps } from './types'

export const Stage: FC<StageProps> = ({
  stageElement,
  stageRefCallback,
  imageElement,
  selectedFillColor,
  selectedStrokeWidth,
  selectedShape,
  shapeConfigList,
  setShapeConfigList,
  selectedShapeIds,
  setSelectedShapeIds,
  setSelectedShape
}) => {
  const drawLayerRef = useRef<Konva.Layer>(null)

  const [textEditorPosition, setTextEditorPosition] = useState<TextEditorPosition | null>(null)

  const imageSize = useImageSize(imageElement)

  const { handleMouseDownStage } = useDrawShape({
    stageElement,
    drawLayerElement: drawLayerRef.current,
    selectedFillColor,
    selectedStrokeWidth,
    selectedShape,
    setShapeConfigList,
    setTextEditorPosition
  })

  const cursorStyle = useCursorStyle({
    stageElement,
    shapeConfigList,
    selectedShape
  })

  const handleMouseDownStageContainer = () => {
    setSelectedShape(null)
    setSelectedShapeIds([])
  }

  // 図形の描画と選択が競合しないようにする
  const disabledSelect = selectedShape != null

  return (
    <StagePresenter
      stageRefCallback={stageRefCallback}
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
      handleMouseDownStageContainer={handleMouseDownStageContainer}
      cursorStyle={cursorStyle}
    />
  )
}
