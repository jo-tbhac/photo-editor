import { css } from '@emotion/react'
import Konva from 'konva'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

import { Textarea } from '@/components/commons/Textarea'
import {
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_STYLE,
  DEFAULT_TEXT_HIT_STROKE_WIDTH,
  DEFAULT_TEXT_STROKE_COLOR_DARK,
  DEFAULT_TEXT_STROKE_COLOR_LIGHT,
  DEFAULT_TEXT_STROKE_WIDTH,
  SHAPES,
  TEXT_LETTER_SPACING
} from '@/constants'
import { TextConfig } from '@/types'
import { isLightFontColor } from '@/utils'

import { TextEditorProps } from './types'

export const TextEditor: FC<TextEditorProps> = ({
  drawLayerElement,
  editTextRef,
  selectedFillColor,
  position,
  setTextEditorPosition,
  setShapeConfigList
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [textElement] = useState<Konva.Text>(() => {
    if (editTextRef.current) {
      return editTextRef.current
    }

    const newText = new Konva.Text({
      type: SHAPES.text,
      fontStyle: DEFAULT_FONT_STYLE,
      fontSize: DEFAULT_FONT_SIZE,
      letterSpacing: TEXT_LETTER_SPACING,
      fill: selectedFillColor,
      hitStrokeWidth: DEFAULT_TEXT_HIT_STROKE_WIDTH,
      strokeWidth: DEFAULT_TEXT_STROKE_WIDTH,
      stroke: isLightFontColor(selectedFillColor)
        ? DEFAULT_TEXT_STROKE_COLOR_DARK
        : DEFAULT_TEXT_STROKE_COLOR_LIGHT,
      x: position.offsetX,
      y: position.offsetY
    })

    drawLayerElement?.add(newText)
    return newText
  })

  useEffect(() => {
    const handleMouseDownDocument = () => {
      textareaRef.current?.blur()
    }

    document.addEventListener('mousedown', handleMouseDownDocument)

    return () => {
      document.removeEventListener('mousedown', handleMouseDownDocument)
    }
  }, [])

  // フォーカスが外れたタイミングでTextの入力を確定する
  const onBlur = () => {
    const newTextConfig: TextConfig = {
      ...textElement.getAttrs(),
      text: textElement.text().trim()
    }

    // idが割り振られている場合は更新処理
    if (newTextConfig.id) {
      setShapeConfigList((currentConfigList) => {
        // 空白文字だけの場合は要素自体を削除する
        if (newTextConfig.text) {
          return currentConfigList.map((currentConfig) =>
            currentConfig.id === newTextConfig.id ? newTextConfig : currentConfig
          )
        }

        return currentConfigList.filter((currentConfig) => currentConfig.id !== newTextConfig.id)
      })

      editTextRef.current = null
      setTextEditorPosition(null)
      return
    }

    // 以降は新規作成時の処理
    // このタイミングでidを割り振る
    if (newTextConfig.text) {
      setShapeConfigList((currentConfigList) => [
        ...currentConfigList,
        { ...newTextConfig, id: uuidV4() }
      ])
    }

    textElement.remove()
    setTextEditorPosition(null)
  }

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    editTextRef.current?.text(newText)
    textElement.text(newText)
  }

  return (
    <>
      <Textarea
        ref={textareaRef}
        autoFocus
        defaultValue={textElement.text()}
        onChange={onChange}
        onBlur={onBlur}
        css={styles.textarea}
        style={{
          caretColor: editTextRef.current?.fill() ?? selectedFillColor,
          fontSize: editTextRef.current?.fontSize() ?? DEFAULT_FONT_SIZE,
          top: position.stageY + position.offsetY,
          left: position.stageX + position.offsetX,
          // Konva.TextのFontFamilyに合わせる
          fontFamily: 'Arial'
        }}
      />
      {/* StageのMouseDownイベントを発火させないためにOverlayを被せる */}
      <div css={styles.overlay} />
    </>
  )
}

const styles = {
  textarea: css`
    background-color: transparent;
    border: none;
    color: transparent;
    font-weight: bold;
    letter-spacing: ${TEXT_LETTER_SPACING}px;
    line-height: 1;
    position: fixed;
    padding: 0;
    width: 100vw;
  `,
  overlay: css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `
}
