import { Theme, css } from '@emotion/react'
import { FC } from 'react'

import { Dropzone } from '@/components/Dropzone'
import { Header } from '@/components/Header'
import { Stage } from '@/components/Stage'
import { ToolBar } from '@/components/ToolBar'
import { HEADER_HEIGHT } from '@/styles/constants'

import { EditorRootPresenterProps } from './types'

export const EditorRootPresenter: FC<EditorRootPresenterProps> = ({
  imageSource,
  setImageSource,
  selectedFillColor,
  setSelectedFillColor,
  selectedStrokeWidth,
  setSelectedStrokeWidth,
  selectedShape,
  setSelectedShape,
  shapeConfigList,
  setShapeConfigList,
  selectedShapeIds,
  setSelectedShapeIds
}) => {
  if (imageSource == null) {
    return (
      <div css={styles.dropzoneContainer}>
        <Dropzone setImageSource={setImageSource} />
      </div>
    )
  }

  return (
    <div css={styles.contentContainer}>
      <Header />
      <div css={styles.body}>
        <ToolBar
          selectedFillColor={selectedFillColor}
          setSelectedFillColor={setSelectedFillColor}
          selectedStrokeWidth={selectedStrokeWidth}
          setSelectedStrokeWidth={setSelectedStrokeWidth}
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
          selectedShapeIds={selectedShapeIds}
          setShapeConfigList={setShapeConfigList}
        />
        <Stage
          imageSource={imageSource}
          selectedFillColor={selectedFillColor}
          selectedStrokeWidth={selectedStrokeWidth}
          selectedShape={selectedShape}
          shapeConfigList={shapeConfigList}
          setShapeConfigList={setShapeConfigList}
          selectedShapeIds={selectedShapeIds}
          setSelectedShapeIds={setSelectedShapeIds}
        />
      </div>
    </div>
  )
}

const styles = {
  dropzoneContainer: (theme: Theme) => css`
    align-items: center;
    background-color: ${theme.colors.background.sub};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100%;
  `,
  contentContainer: css`
    height: 100vh;
    width: 100%;
  `,
  body: css`
    display: flex;
    height: calc(100vh - ${HEADER_HEIGHT}px);
  `
}
