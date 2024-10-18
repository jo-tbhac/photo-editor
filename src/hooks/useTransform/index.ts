import type Konva from 'konva'
import { type Dispatch, type SetStateAction, useCallback } from 'react'

import {
  MIN_FONT_SIZE,
  MIN_SHAPE_HEIGHT,
  MIN_SHAPE_WIDTH,
  MIN_TEXT_STROKE_WIDTH,
  SHAPES
} from '@/constants'
import type { ShapeConfig } from '@/types'

export const useTransform = (
  element: Konva.Rect | Konva.Ellipse | Konva.Text | Konva.Line | Konva.Group | null,
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
) => {
  const onDragEnd = useCallback(
    (event: Konva.KonvaEventObject<DragEvent>) => {
      const newX = event.target.x()
      const newY = event.target.y()
      const targetId = event.target.id()

      setShapeConfigList((currentConfigList) => {
        return currentConfigList.map((currentConfig) =>
          currentConfig.id === targetId ? { ...currentConfig, x: newX, y: newY } : currentConfig
        )
      })
    },
    [setShapeConfigList]
  )

  const onTransformEnd = useCallback(() => {
    if (!element) {
      return
    }
    // TransformerはScaleのみを変更し、WidthとHeightは変更しないので、変更後のScaleをもとに新しいWidthとHeightを計算する
    const scaleX = element.scaleX()
    const scaleY = element.scaleY()

    // Scaleを変数にコピーしたら初期値に戻しておく
    element.scaleX(1)
    element.scaleY(1)

    const newParams = (() => {
      // Textの場合はfontSizeとStrokeWidthを更新する
      if (element.getAttrs().type === SHAPES.text) {
        const textScale = (scaleX + scaleY) / 2
        const currentFontSize = element.getAttrs().fontSize
        const currentStrokeWidth = element.getAttrs().strokeWidth

        return {
          ...element.getAttrs(),
          fontSize: Math.max(currentFontSize * textScale, MIN_FONT_SIZE),
          strokeWidth: Math.max(currentStrokeWidth * textScale, MIN_TEXT_STROKE_WIDTH)
        }
      }

      return {
        ...element.getAttrs(),
        width: Math.max(MIN_SHAPE_WIDTH, element.width() * scaleX),
        height: Math.max(MIN_SHAPE_HEIGHT, element.height() * scaleY)
      }
    })()

    const targetId = element.id()

    setShapeConfigList((currentConfigList) => {
      return currentConfigList.map((currentConfig) =>
        currentConfig.id === targetId ? { ...currentConfig, ...newParams } : currentConfig
      )
    })
  }, [setShapeConfigList, element])

  return { onDragEnd, onTransformEnd }
}
