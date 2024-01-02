import { Theme, css } from '@emotion/react'
import { FC } from 'react'
import { Image, Layer, Stage } from 'react-konva'

import { Rect } from '@/components/shapes/Rect'
import { RoundedRect } from '@/components/shapes/RoundedRect'
import { SHAPES } from '@/constants'

import { StagePresenterProps } from './types'

export const StagePresenter: FC<StagePresenterProps> = ({
  stageRef,
  drawLayerRef,
  imageElement,
  imageSize,
  shapeConfigList,
  handleMouseDownStage
}) => {
  return (
    <div css={styles.container}>
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
                return <Rect {...shapeConfig} key={shapeConfig.id} selected={false} />
              case SHAPES.roundedRect:
                return <RoundedRect {...shapeConfig} key={shapeConfig.id} selected={false} />
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
