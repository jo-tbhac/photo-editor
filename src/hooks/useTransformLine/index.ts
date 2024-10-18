import type Konva from 'konva'
import { type Dispatch, type SetStateAction, useCallback, useRef } from 'react'

import type { ShapeConfig } from '@/types'

export const useTransformLine = (
  element: Konva.Line | Konva.Arrow | null,
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
) => {
  const offset = useRef({ startX: 0, startY: 0 })

  const onDragStart = useCallback((event: Konva.KonvaEventObject<MouseEvent>) => {
    offset.current.startX = event.target.x()
    offset.current.startY = event.target.y()
  }, [])

  const onDragEnd = useCallback(
    (event: Konva.KonvaEventObject<MouseEvent>) => {
      if (!element) {
        return
      }
      const movementX = event.target.x() - offset.current.startX
      const movementY = event.target.y() - offset.current.startY

      const points = element.points()

      const currentX1 = points[0]
      const currentY1 = points[1]
      const currentX2 = points[2]
      const currentY2 = points[3]

      const newPosition = {
        x1: currentX1 + movementX,
        y1: currentY1 + movementY,
        x2: currentX2 + movementX,
        y2: currentY2 + movementY
      }

      const newPoints = [newPosition.x1, newPosition.y1, newPosition.x2, newPosition.y2]

      const targetId = element.id()

      // Groupのx,yを初期値に戻す
      event.target.x(0)
      event.target.y(0)
      offset.current = { startX: 0, startY: 0 }

      setShapeConfigList((currentConfigList) => {
        return currentConfigList.map((currentConfig) =>
          currentConfig.id === targetId ? { ...currentConfig, points: newPoints } : currentConfig
        )
      })
    },
    [setShapeConfigList, element]
  )

  return { onDragStart, onDragEnd }
}
