import { useEffect, useMemo, useState } from 'react'

import {
  HEADER_HEIGHT,
  STAGE_PADDING_HORIZONTAL,
  STAGE_PADDING_VERTICAL,
  TOOLBAR_WIDTH
} from '@styles/constants'

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
