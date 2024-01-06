import { Theme, css } from '@emotion/react'
import Konva from 'konva'
import { FC, useRef } from 'react'
import { Image, Layer, Stage } from 'react-konva'

import { TextEditor } from '@/components/TextEditor'
import { Arrow } from '@/components/shapes/Arrow'
import { FreeLine } from '@/components/shapes/FreeLine'
import { Line } from '@/components/shapes/Line'
import { Oval } from '@/components/shapes/Oval'
import { Rect } from '@/components/shapes/Rect'
import { RoundedRect } from '@/components/shapes/RoundedRect'
import { Text } from '@/components/shapes/Text'
import { SHAPES } from '@/constants'

import { StagePresenterProps } from './types'

export const StagePresenter: FC<StagePresenterProps> = ({
  stageRef,
  drawLayerRef,
  imageElement,
  imageSize,
  selectedFillColor,
  disabledSelect,
  shapeConfigList,
  setShapeConfigList,
  selectedShapeIds,
  setSelectedShapeIds,
  textEditorPosition,
  setTextEditorPosition,
  handleMouseDownStage,
  handleMouseDownStageContainer,
  cursorStyle
}) => {
  const editTextRef = useRef<Konva.Text | null>(null)

  return (
    <div
      css={styles.container}
      style={{ cursor: cursorStyle }}
      onMouseDown={handleMouseDownStageContainer}
    >
      <Stage
        ref={stageRef}
        width={imageSize?.width}
        height={imageSize?.height}
        onMouseDown={handleMouseDownStage}
      >
        <Layer>
          <Image image={imageElement} width={imageSize?.width} height={imageSize?.height} />
        </Layer>
        <Layer ref={drawLayerRef} />
        <Layer>
          {shapeConfigList.map((shapeConfig) => {
            switch (shapeConfig.type) {
              case SHAPES.rect:
                return (
                  <Rect
                    {...shapeConfig}
                    key={shapeConfig.id}
                    strokeScaleEnabled={false}
                    disabledSelect={disabledSelect}
                    selected={selectedShapeIds.includes(shapeConfig.id)}
                    setSelectedShapeIds={setSelectedShapeIds}
                    setShapeConfigList={setShapeConfigList}
                  />
                )
              case SHAPES.roundedRect:
                return (
                  <RoundedRect
                    {...shapeConfig}
                    key={shapeConfig.id}
                    strokeScaleEnabled={false}
                    disabledSelect={disabledSelect}
                    selected={selectedShapeIds.includes(shapeConfig.id)}
                    setSelectedShapeIds={setSelectedShapeIds}
                    setShapeConfigList={setShapeConfigList}
                  />
                )
              case SHAPES.oval:
                return (
                  <Oval
                    {...shapeConfig}
                    key={shapeConfig.id}
                    strokeScaleEnabled={false}
                    disabledSelect={disabledSelect}
                    selected={selectedShapeIds.includes(shapeConfig.id)}
                    setSelectedShapeIds={setSelectedShapeIds}
                    setShapeConfigList={setShapeConfigList}
                  />
                )
              case SHAPES.line:
                return (
                  <Line
                    {...shapeConfig}
                    key={shapeConfig.id}
                    disabledSelect={disabledSelect}
                    selected={selectedShapeIds.includes(shapeConfig.id)}
                    setSelectedShapeIds={setSelectedShapeIds}
                    setShapeConfigList={setShapeConfigList}
                  />
                )
              case SHAPES.arrow:
                return (
                  <Arrow
                    {...shapeConfig}
                    key={shapeConfig.id}
                    disabledSelect={disabledSelect}
                    selected={selectedShapeIds.includes(shapeConfig.id)}
                    setSelectedShapeIds={setSelectedShapeIds}
                    setShapeConfigList={setShapeConfigList}
                  />
                )
              case SHAPES.pen:
                return (
                  <FreeLine
                    {...shapeConfig}
                    key={shapeConfig.id}
                    disabledSelect={disabledSelect}
                    selected={selectedShapeIds.includes(shapeConfig.id)}
                    setSelectedShapeIds={setSelectedShapeIds}
                    setShapeConfigList={setShapeConfigList}
                  />
                )
              case SHAPES.text:
                return (
                  <Text
                    {...shapeConfig}
                    key={shapeConfig.id}
                    disabledSelect={disabledSelect}
                    editTextRef={editTextRef}
                    selected={selectedShapeIds.includes(shapeConfig.id)}
                    setSelectedShapeIds={setSelectedShapeIds}
                    setShapeConfigList={setShapeConfigList}
                    setTextEditorPosition={setTextEditorPosition}
                  />
                )
              default:
                return null
            }
          })}
        </Layer>
      </Stage>
      {textEditorPosition && (
        <TextEditor
          drawLayerElement={drawLayerRef.current}
          editTextRef={editTextRef}
          selectedFillColor={selectedFillColor}
          position={textEditorPosition}
          setTextEditorPosition={setTextEditorPosition}
          setShapeConfigList={setShapeConfigList}
        />
      )}
    </div>
  )
}

const styles = {
  container: (theme: Theme) => css`
    align-items: center;
    background-color: ${theme.colors.background.sub};
    display: flex;
    flex: 1;
    justify-content: center;
  `
}
