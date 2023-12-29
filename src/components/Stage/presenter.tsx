import { Theme, css } from '@emotion/react'
import { FC } from 'react'
import { Image, Layer, Stage } from 'react-konva'

import { StagePresenterProps } from './types'

export const StagePresenter: FC<StagePresenterProps> = ({ imageElement, imageSize }) => {
  return (
    <div css={styles.container}>
      <Stage width={imageSize?.width} height={imageSize?.height}>
        <Layer>
          <Image image={imageElement} width={imageSize?.width} height={imageSize?.height} />
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
