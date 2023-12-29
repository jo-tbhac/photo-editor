import { useCallback, useState } from 'react'

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
