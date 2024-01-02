import { Theme, css } from '@emotion/react'
import { FC } from 'react'
import { Image, Layer, Stage } from 'react-konva'

import { Arrow } from '@/components/shapes/Arrow'
import { FreeLine } from '@/components/shapes/FreeLine'
import { Line } from '@/components/shapes/Line'
import { Oval } from '@/components/shapes/Oval'
import { Rect } from '@/components/shapes/Rect'
import { RoundedRect } from '@/components/shapes/RoundedRect'
import { SHAPES } from '@/constants'

import { StagePresenterProps } from './types'

export const StagePresenter: FC<StagePresenterProps> = ({
  stageRef,
  drawLayerRef,
  imageElement,
  imageSize,
  disabledSelect,
  shapeConfigList,
  setShapeConfigList,
  selectedShapeIds,
  setSelectedShapeIds,
  handleMouseDownStage
}) => {
  const onMouseDownStageContainer = () => {
    setSelectedShapeIds([])
  }

  return (
    <div css={styles.container} onMouseDown={onMouseDownStageContainer}>
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
              default:
                return null
            }
          })}
        </Layer>
      </Stage>
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
