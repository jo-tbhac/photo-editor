import { FC } from 'react'

import { useFillColor, useImageSource } from './hooks'
import { EditorRootPresenter } from './presenter'

export const EditorRoot: FC = () => {
  const { imageSource, setImageSource } = useImageSource()
  const { selectedFillColor, setSelectedFillColor } = useFillColor()

  return (
    <EditorRootPresenter
      imageSource={imageSource}
      setImageSource={setImageSource}
      selectedFillColor={selectedFillColor}
      setSelectedFillColor={setSelectedFillColor}
    />
  )
}
