import * as CSS from 'csstype'
import Konva from 'konva'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

import {
  DEFAULT_ROUNDED_RECT_CORNER_RADIUS,
  LINE_HIT_STROKE_WIDTH,
  MAX_ARROW_POINTER_WIDTH,
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
import {
  ArrowConfig,
  FreeLineConfig,
  LineConfig,
  OvalConfig,
  RectConfig,
  RoundedRectConfig,
  ShapeConfig,
  Shapes,
  TextEditorPosition
} from '@/types'

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
  setShapeConfigList,
  setTextEditorPosition
}: {
  stageElement: Konva.Stage | null
  drawLayerElement: Konva.Layer | null
  selectedFillColor: string
  selectedStrokeWidth: number
  selectedShape: Shapes | null
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setTextEditorPosition: Dispatch<SetStateAction<TextEditorPosition | null>>
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
      case SHAPES.line: {
        const layerOffset = drawLayerElement.offset()

        const x1 = event.evt.offsetX + layerOffset.x
        const y1 = event.evt.offsetY + layerOffset.y
        let x2 = event.evt.offsetX + layerOffset.x
        let y2 = event.evt.offsetY + layerOffset.y

        const newLine = new Konva.Line({
          stroke: selectedFillColor,
          strokeWidth: selectedStrokeWidth,
          visible: false
        })

        drawLayerElement.add(newLine)

        const handleMouseMove = (moveEvent: Konva.KonvaEventObject<MouseEvent>) => {
          moveEvent.evt.preventDefault()
          const vector2D = stageElement.getPointerPosition()

          if (!vector2D) {
            return
          }

          x2 = vector2D.x + layerOffset.x
          y2 = vector2D.y + layerOffset.y

          newLine.setAttrs({
            points: [x1, y1, x2, y2],
            visible: true
          })
        }

        const handleFinishInsertShape = (mouseEvent: Konva.KonvaEventObject<MouseEvent>) => {
          mouseEvent.evt.preventDefault()

          const newLineConfig: LineConfig = {
            ...newLine.getAttrs(),
            id: uuidV4(),
            type: selectedShape,
            hitStrokeWidth: LINE_HIT_STROKE_WIDTH
          }

          newLine.remove()
          setShapeConfigList((currentConfigList) =>
            newLineConfig.visible ? [...currentConfigList, newLineConfig] : currentConfigList
          )

          stageElement.off('mousemove', handleMouseMove)
          stageElement.off('mouseup mouseleave', handleFinishInsertShape)
        }

        stageElement.on('mousemove', handleMouseMove)
        stageElement.on('mouseup mouseleave', handleFinishInsertShape)
        break
      }
      case SHAPES.arrow: {
        const layerOffset = drawLayerElement.offset()

        const x1 = event.evt.offsetX + layerOffset.x
        const y1 = event.evt.offsetY + layerOffset.y
        let x2 = event.evt.offsetX + layerOffset.x
        let y2 = event.evt.offsetY + layerOffset.y

        const newArrow = new Konva.Arrow({
          fill: selectedFillColor,
          stroke: selectedFillColor,
          strokeWidth: selectedStrokeWidth,
          points: [x1, y1, x2, y2],
          visible: false
        })

        drawLayerElement.add(newArrow)

        const handleMouseMove = (moveEvent: Konva.KonvaEventObject<MouseEvent>) => {
          moveEvent.evt.preventDefault()
          const vector2D = stageElement.getPointerPosition()

          if (!vector2D) {
            return
          }

          x2 = vector2D.x + layerOffset.x
          y2 = vector2D.y + layerOffset.y

          // 線の長さに応じて矢印のポインタのサイズを変更する
          const pointerSize = Math.min(
            (Math.abs(x2 - x1) + Math.abs(y2 - y1)) * 0.1,
            MAX_ARROW_POINTER_WIDTH
          )

          newArrow.setAttrs({
            points: [x1, y1, x2, y2],
            visible: true,
            pointerLength: pointerSize,
            pointerWidth: pointerSize
          })
        }

        const handleFinishInsertShape = (mouseEvent: Konva.KonvaEventObject<MouseEvent>) => {
          mouseEvent.evt.preventDefault()
          if (!stageElement) {
            return
          }

          const newArrowConfig: ArrowConfig = {
            ...newArrow.getAttrs(),
            id: uuidV4(),
            type: selectedShape,
            hitStrokeWidth: LINE_HIT_STROKE_WIDTH
          }

          newArrow.remove()
          setShapeConfigList((currentConfigList) =>
            newArrowConfig.visible ? [...currentConfigList, newArrowConfig] : currentConfigList
          )

          stageElement.off('mousemove', handleMouseMove)
          stageElement.off('mouseup mouseleave', handleFinishInsertShape)
        }

        stageElement.on('mousemove', handleMouseMove)
        stageElement.on('mouseup mouseleave', handleFinishInsertShape)
        break
      }
      case SHAPES.pen: {
        const newFreeLine = new Konva.Line({
          stroke: selectedFillColor,
          strokeWidth: selectedStrokeWidth,
          visible: false,
          points: [event.evt.offsetX, event.evt.offsetY]
        })

        drawLayerElement.add(newFreeLine)

        const handleMouseMove = (moveEvent: Konva.KonvaEventObject<MouseEvent>) => {
          moveEvent.evt.preventDefault()
          const vector2D = stageElement.getPointerPosition()

          if (!vector2D) {
            return
          }

          const currentPoints = newFreeLine.points()

          newFreeLine.setAttrs({
            points: [...currentPoints, vector2D.x, vector2D.y],
            visible: true
          })
        }

        const handleFinishInsertShape = (mouseEvent: Konva.KonvaEventObject<MouseEvent>) => {
          mouseEvent.evt.preventDefault()

          const newFreeLineConfig: FreeLineConfig = {
            ...newFreeLine.getAttrs(),
            id: uuidV4(),
            type: selectedShape,
            hitStrokeWidth: LINE_HIT_STROKE_WIDTH
          }

          newFreeLine.remove()
          setShapeConfigList((currentConfigList) =>
            newFreeLineConfig.visible
              ? [...currentConfigList, newFreeLineConfig]
              : currentConfigList
          )

          stageElement.off('mousemove', handleMouseMove)
          stageElement.off('mouseup mouseleave', handleFinishInsertShape)
        }

        stageElement.on('mousemove', handleMouseMove)
        stageElement.on('mouseup mouseleave', handleFinishInsertShape)
        break
      }
      case SHAPES.text: {
        event.evt.preventDefault()
        event.evt.stopPropagation()

        const { offsetX, offsetY } = event.evt
        setTextEditorPosition({
          stageX: event.evt.pageX - offsetX,
          stageY: event.evt.pageY - offsetY,
          offsetX,
          offsetY
        })
        break
      }
    }
  }

  return { handleMouseDownStage }
}

export const useHandleKeyDown = ({
  selectedShapeIds,
  setShapeConfigList,
  setSelectedShapeIds
}: {
  selectedShapeIds: string[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}) => {
  useEffect(() => {
    if (selectedShapeIds.length === 0) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target } = event

      if (target instanceof HTMLTextAreaElement) {
        return
      }

      switch (key) {
        case 'Backspace':
        case 'Delete':
          if (selectedShapeIds.length === 0) {
            return
          }

          setShapeConfigList((currentConfigList) => {
            return currentConfigList.filter(
              (currentConfig) => !selectedShapeIds.includes(currentConfig.id)
            )
          })
          setSelectedShapeIds([])
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedShapeIds, setSelectedShapeIds, setShapeConfigList])
}

export const useCursorStyle = ({
  stageElement,
  shapeConfigList,
  selectedShape
}: {
  stageElement: Konva.Stage | null
  shapeConfigList: ShapeConfig[]
  selectedShape: Shapes | null
}) => {
  const [cursorStyle, setCursorStyle] = useState<CSS.Property.Cursor>('default')

  useEffect(() => {
    setCursorStyle(() => {
      switch (selectedShape) {
        case SHAPES.rect:
        case SHAPES.oval:
        case SHAPES.roundedRect:
        case SHAPES.line:
        case SHAPES.arrow:
        case SHAPES.pen:
          return 'crosshair'
        case SHAPES.text:
          return 'text'
        default:
          return 'default'
      }
    })
  }, [selectedShape])

  useEffect(() => {
    if (!stageElement) {
      return
    }

    const selectorList: string[] = []
    for (const shapeConfig of shapeConfigList) {
      selectorList.push(`#${shapeConfig.id}`)
    }

    const targetShapes = stageElement.find(selectorList.join(','))

    const onMouseEnter = () => {
      if (!selectedShape) {
        setCursorStyle('move')
      }
    }
    const onMouseLeave = () => {
      if (!selectedShape) {
        setCursorStyle('default')
      }
    }

    for (const shape of targetShapes) {
      shape.on('mouseenter', onMouseEnter)
      shape.on('mouseleave', onMouseLeave)
    }

    return () => {
      for (const shape of targetShapes) {
        shape.off('mouseenter', onMouseEnter)
        shape.off('mouseleave', onMouseLeave)
      }
    }
  }, [selectedShape, shapeConfigList, stageElement])

  return cursorStyle
}
