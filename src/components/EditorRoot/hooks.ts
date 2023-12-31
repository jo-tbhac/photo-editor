import { useCallback, useState } from 'react'

import { FILL_COLOR_LIST, STROKE_WIDTH_LIST } from '@/constants'
import { Shapes } from '@/types'

export const useImageSource = () => {
  const [imageSource, setImageSourceState] = useState<string | null>(null)

  const setImageSource = useCallback((newSource: string | null) => {
    setImageSourceState((currentSource) => {
      if (currentSource != null) {
        URL.revokeObjectURL(currentSource)
      }
      return newSource
    })
  }, [])

  return { imageSource, setImageSource }
}

export const useSelectedFillColor = () => {
  const [selectedFillColor, setSelectedFillColorState] = useState(FILL_COLOR_LIST[0])

  const setSelectedFillColor = useCallback((newFillColor: string) => {
    setSelectedFillColorState(newFillColor)
  }, [])

  return { selectedFillColor, setSelectedFillColor }
}

export const useSelectedStrokeWidth = () => {
  const [selectedStrokeWidth, setSelectedStrokeWidthState] = useState(STROKE_WIDTH_LIST[2])

  const setSelectedStrokeWidth = (newStrokeWidth: number) => {
    setSelectedStrokeWidthState(newStrokeWidth)
  }

  return { selectedStrokeWidth, setSelectedStrokeWidth }
}

export const useSelectedShape = () => {
  const [selectedShape, setSelectedShapeState] = useState<Shapes | null>(null)

  const setSelectedShape = (newShape: Shapes | null) => {
    setSelectedShapeState(newShape)
  }

  return { selectedShape, setSelectedShape }
}
