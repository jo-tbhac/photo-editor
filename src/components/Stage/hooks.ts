import Konva from 'konva'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

import {
  DEFAULT_ROUNDED_RECT_CORNER_RADIUS,
  MIN_SHAPE_HEIGHT,
  MIN_SHAPE_WIDTH,
  SHAPES
} from '@/constants'
import {
  HEADER_HEIGHT,
  STAGE_PADDING_HORIZONTAL,
  STAGE_PADDING_VERTICAL,
  TOOLBAR_WIDTH
} from '@/styles/constants'
import { OvalConfig, RectConfig, RoundedRectConfig, ShapeConfig, Shapes } from '@/types'

export const useImage = (source: string) => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | undefined>(undefined)

  useEffect(() => {
    const img = document.createElement('img')

    const onLoad = () => {
      setImageElement(img)
    }

    const onError = () => {
      setImageElement(undefined)
      throw new Error('image load error')
    }

    img.addEventListener('load', onLoad)
    img.addEventListener('error', onError)
    img.src = source

    return () => {
      img.removeEventListener('load', onLoad)
      img.removeEventListener('error', onError)
    }
  }, [source])

  return imageElement
}

export const useImageSize = (imageElement: HTMLImageElement | undefined) => {
  return useMemo(() => {
    if (imageElement == null) {
      return undefined
    }

    const originalWidth = imageElement.naturalWidth
    const originalHeight = imageElement.naturalHeight
    const maxWidth = window.innerWidth - TOOLBAR_WIDTH - STAGE_PADDING_HORIZONTAL * 2
    const maxHeight = window.innerHeight - HEADER_HEIGHT - STAGE_PADDING_VERTICAL * 2
    let rate = 1.0

    rate = maxWidth / originalWidth
    rate = Math.min(rate, maxHeight / originalHeight)

    return {
      width: Math.floor(originalWidth * rate),
      height: Math.floor(originalHeight * rate)
    }
  }, [imageElement])
}

export const useDrawShape = ({
  stageElement,
  drawLayerElement,
  selectedFillColor,
  selectedStrokeWidth,
  selectedShape,
  setShapeConfigList
}: {
  stageElement: Konva.Stage | null
  drawLayerElement: Konva.Layer | null
  selectedFillColor: string
  selectedStrokeWidth: number
  selectedShape: Shapes | null
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
}) => {
  const handleMouseDownStage = (event: Konva.KonvaEventObject<MouseEvent>) => {
    if (!stageElement || !drawLayerElement) {
      return
    }

    switch (selectedShape) {
      case SHAPES.rect:
      case SHAPES.roundedRect: {
        const x1 = event.evt.offsetX
        const y1 = event.evt.offsetY
        let x2 = event.evt.offsetX
        let y2 = event.evt.offsetY

        const newRect = new Konva.Rect({
          stroke: selectedFillColor,
          strokeWidth: selectedStrokeWidth,
          cornerRadius:
            selectedShape === SHAPES.roundedRect ? DEFAULT_ROUNDED_RECT_CORNER_RADIUS : undefined,
          visible: false
        })

        drawLayerElement.add(newRect)

        const handleMouseMove = (moveEvent: Konva.KonvaEventObject<MouseEvent>) => {
          moveEvent.evt.preventDefault()
          const vector2D = stageElement.getPointerPosition()

          if (!vector2D) {
            return
          }

          x2 = vector2D.x
          y2 = vector2D.y

          newRect.setAttrs({
            x: Math.min(x1, x2),
            y: Math.min(y1, y2),
            width: Math.abs(x2 - x1),
            height: Math.abs(y2 - y1),
            visible: true
          })
        }

        const handleFinishInsertShape = (mouseEvent: Konva.KonvaEventObject<MouseEvent>) => {
          mouseEvent.evt.preventDefault()
          const newRectConfig: RectConfig | RoundedRectConfig = {
            ...newRect.getAttrs(),
            id: uuidV4(),
            type: selectedShape,
            height: Math.max(newRect.height(), MIN_SHAPE_HEIGHT),
            width: Math.max(newRect.width(), MIN_SHAPE_WIDTH)
          }

          newRect.remove()
          setShapeConfigList((currentConfigList) =>
            newRectConfig.visible ? [...currentConfigList, newRectConfig] : currentConfigList
          )

          stageElement.off('mousemove', handleMouseMove)
          stageElement.off('mouseup mouseleave', handleFinishInsertShape)
        }

        stageElement.on('mousemove', handleMouseMove)
        stageElement.on('mouseup mouseleave', handleFinishInsertShape)
        break
      }
      case SHAPES.oval: {
        const x1 = event.evt.offsetX
        const y1 = event.evt.offsetY
        let x2 = event.evt.offsetX
        let y2 = event.evt.offsetY

        const newOval = new Konva.Ellipse({
          stroke: selectedFillColor,
          strokeWidth: selectedStrokeWidth,
          x: x1,
          y: y1,
          radiusX: x1,
          radiusY: y1,
          visible: false
        })

        drawLayerElement.add(newOval)

        const handleMouseMove = (moveEvent: Konva.KonvaEventObject<MouseEvent>) => {
          moveEvent.evt.preventDefault()
          const vector2D = stageElement.getPointerPosition()

          if (!vector2D) {
            return
          }

          x2 = vector2D.x
          y2 = vector2D.y

          const moveX = x2 - x1
          const moveY = y2 - y1
          const newX = x1 + moveX / 2
          const newY = y1 + moveY / 2

          newOval.setAttrs({
            x: newX,
            y: newY,
            radiusX: Math.abs(newX - x1),
            radiusY: Math.abs(newY - y1),
            visible: true
          })
        }

        const handleFinishInsertShape = (mouseEvent: Konva.KonvaEventObject<MouseEvent>) => {
          mouseEvent.evt.preventDefault()
          const newOvalConfig: OvalConfig = {
            ...newOval.getAttrs(),
            id: uuidV4(),
            type: selectedShape,
            radiusX: Math.max(newOval.radiusX(), MIN_SHAPE_WIDTH),
            radiusY: Math.max(newOval.radiusY(), MIN_SHAPE_HEIGHT)
          }

          newOval.remove()
          setShapeConfigList((currentConfigList) =>
            newOvalConfig.visible ? [...currentConfigList, newOvalConfig] : currentConfigList
          )

          stageElement.off('mousemove', handleMouseMove)
          stageElement.off('mouseup mouseleave', handleFinishInsertShape)
        }

        stageElement.on('mousemove', handleMouseMove)
        stageElement.on('mouseup mouseleave', handleFinishInsertShape)
        break
      }
    }
  }

  return { handleMouseDownStage }
}
