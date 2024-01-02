import Konva from 'konva'
import { Dispatch, SetStateAction } from 'react'

import { MAX_ARROW_POINTER_WIDTH } from '@/constants'
import { LinePointsPosition, ShapeConfig } from '@/types'

export const useDragLineAnchor = ({
  lineElement,
  position,
  setShapeConfigList,
  setTransformerPosition
}: {
  lineElement: Konva.Line | Konva.Arrow | null
  position: { x1: number; y1: number; x2: number; y2: number }
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setTransformerPosition: Dispatch<SetStateAction<LinePointsPosition | null>>
}) => {
  const onDragMoveAnchor1 = (event: Konva.KonvaEventObject<DragEvent>) => {
    event.cancelBubble = true

    const stage = event.target.getStage()
    const vector2D = stage?.getPointerPosition()

    if (!vector2D || !lineElement) {
      return
    }

    const x1 = vector2D.x
    const y1 = vector2D.y

    // 線の長さに応じて矢印のポインタのサイズを変更する
    const pointerSize = Math.min(
      (Math.abs(position.x2 - x1) + Math.abs(position.y2 - y1)) * 0.1,
      MAX_ARROW_POINTER_WIDTH
    )

    lineElement.setAttrs({
      points: [x1, y1, position.x2, position.y2],
      pointerLength: pointerSize,
      pointerWidth: pointerSize
    })
  }

  const onDragMoveAnchor2 = (event: Konva.KonvaEventObject<DragEvent>) => {
    event.cancelBubble = true

    const stage = event.target.getStage()
    const vector2D = stage?.getPointerPosition()

    if (!vector2D || !lineElement) {
      return
    }

    const x2 = vector2D.x
    const y2 = vector2D.y

    // 線の長さに応じて矢印のポインタのサイズを変更する
    const pointerSize = Math.min(
      (Math.abs(x2 - position.x1) + Math.abs(y2 - position.y1)) * 0.1,
      MAX_ARROW_POINTER_WIDTH
    )

    lineElement.setAttrs({
      points: [position.x1, position.y1, x2, y2],
      pointerLength: pointerSize,
      pointerWidth: pointerSize
    })
  }

  const onDragEndAnchor = (event: Konva.KonvaEventObject<DragEvent>) => {
    event.cancelBubble = true

    if (!lineElement) {
      return
    }

    const newPoints = lineElement.points()
    const targetId = lineElement.id()

    setTransformerPosition({
      x1: newPoints[0],
      y1: newPoints[1],
      x2: newPoints[2],
      y2: newPoints[3]
    })

    setShapeConfigList((currentConfigList) =>
      currentConfigList.map((currentConfig) => {
        if (currentConfig.id !== targetId) {
          return currentConfig
        }

        return { ...currentConfig, points: newPoints }
      })
    )
  }

  return { onDragMoveAnchor1, onDragMoveAnchor2, onDragEndAnchor }
}
