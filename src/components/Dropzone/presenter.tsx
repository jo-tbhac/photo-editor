import { Theme, css } from '@emotion/react'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons/faCloudArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DragEvent, FC, useState } from 'react'

import { DropzonePresenterProps } from './types'

export const DropzonePresenter: FC<DropzonePresenterProps> = ({ handleDropFiles }) => {
  const [isDragOver, setIsDragOver] = useState(false)

  const onDragEnter = () => {
    setIsDragOver(true)
  }

  const onDragLeave = () => {
    setIsDragOver(false)
  }

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    handleDropFiles(event.dataTransfer.files)
    setIsDragOver(false)
  }

  return (
    <div css={[styles.container, isDragOver ? styles.hover : undefined]}>
      <div css={styles.iconContainer}>
        <FontAwesomeIcon icon={faCloudArrowUp} size="2x" />
      </div>
      <div css={styles.description}>画像をドロップ、または選択して編集を開始</div>
      <div
        css={styles.overlay}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      />
    </div>
  )
}

const styles = {
  container: (theme: Theme) => css`
    background-color: ${theme.colors.background.main};
    border: dashed 2px ${theme.colors.border.main};
    border-radius: ${theme.styles.borderRadius.medium};
    color: ${theme.colors.font.sub};
    padding: ${theme.styles.padding.large} ${theme.styles.padding.large};
    position: relative;
    width: 500px;
    &:hover {
      background-color: ${theme.colors.background.hover.main};
      color: ${theme.colors.app.primary.main};
    }
  `,
  hover: (theme: Theme) => css`
    background-color: ${theme.colors.background.hover.main};
    color: ${theme.colors.app.primary.main};
  `,
  iconContainer: (theme: Theme) => css`
    padding: ${theme.styles.padding.medium} 0;
    text-align: center;
  `,
  description: (theme: Theme) => css`
    padding: ${theme.styles.padding.medium} 0;
    text-align: center;
  `,
  overlay: css`
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `
}
