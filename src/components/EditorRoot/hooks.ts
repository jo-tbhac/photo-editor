import { useCallback, useState } from 'react'

import { FILL_COLOR_LIST } from '@constants/index'

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

export const useFillColor = () => {
  const [selectedFillColor, setSelectedFillColorState] = useState(FILL_COLOR_LIST[0])

  const setSelectedFillColor = useCallback((newFillColor: string) => {
    setSelectedFillColorState(newFillColor)
  }, [])

  return { selectedFillColor, setSelectedFillColor }
}
