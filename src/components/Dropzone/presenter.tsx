import { Theme, css } from '@emotion/react'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons/faCloudArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from 'react'

import { DropzonePresenterProps } from './types'

export const DropzonePresenter: FC<DropzonePresenterProps> = ({ handleSelectFiles }) => {
  const inputRef = useRef<HTMLInputElement>(null)

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
    handleSelectFiles(event.dataTransfer.files)
    setIsDragOver(false)
  }

  const onChangeFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement && event.target.files) {
      handleSelectFiles(event.target.files)
    }
  }

  const onClickDropzone = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    inputRef.current?.click()
  }

  return (
    <div css={[styles.container, isDragOver ? styles.hover : undefined]}>
      <div css={styles.iconContainer}>
        <FontAwesomeIcon icon={faCloudArrowUp} size="2x" />
      </div>
      <div css={styles.description}>画像をドロップ、または選択して編集を開始</div>
      <input ref={inputRef} type="file" css={styles.fileInput} onChange={onChangeFileInput} />
      <div
        css={styles.overlay}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={onClickDropzone}
        onKeyDown={() => {}}
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
  fileInput: css`
    display: none;
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
