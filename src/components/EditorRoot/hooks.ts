import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react'

import { FILL_COLOR_LIST, STROKE_WIDTH_LIST } from '@/constants'
import type { ShapeConfig, Shapes } from '@/types'

export const useImage = () => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | undefined>(undefined)
  const [imageSource, setImageSourceState] = useState<string | null>(null)

  const setImageSource = useCallback((newSource: string | null) => {
    setImageSourceState((currentSource) => {
      if (currentSource != null) {
        URL.revokeObjectURL(currentSource)
      }
      return newSource
    })
  }, [])

  useEffect(() => {
    if (!imageSource) {
      return
    }

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
    img.src = imageSource

    return () => {
      img.removeEventListener('load', onLoad)
      img.removeEventListener('error', onError)
    }
  }, [imageSource])

  return { imageElement, setImageSource }
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

  const setSelectedShape = useCallback((newShape: Shapes | null) => {
    setSelectedShapeState((currentSelectedShape) => {
      if (currentSelectedShape === newShape) {
        return null
      }
      return newShape
    })
  }, [])

  return { selectedShape, setSelectedShape }
}

export const useHandleKeyDown = ({
  selectedShapeIds,
  setShapeConfigList,
  setSelectedShapeIds,
  setSelectedShape
}: {
  selectedShapeIds: string[]
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
  setSelectedShape: (shapes: Shapes | null) => void
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target } = event

      if (target instanceof HTMLTextAreaElement) {
        return
      }

      switch (key) {
        case 'Escape':
          setSelectedShape(null)
          setSelectedShapeIds([])
          break
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
  }, [selectedShapeIds, setSelectedShapeIds, setShapeConfigList, setSelectedShape])
}
