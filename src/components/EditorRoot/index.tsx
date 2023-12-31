import { FC } from 'react'

import { useImageSource, useSelectedFillColor, useSelectedStrokeWidth } from './hooks'
import { EditorRootPresenter } from './presenter'

export const EditorRoot: FC = () => {
  const { imageSource, setImageSource } = useImageSource()
  const { selectedFillColor, setSelectedFillColor } = useSelectedFillColor()
  const { selectedStrokeWidth, setSelectedStrokeWidth } = useSelectedStrokeWidth()

  return (
    <EditorRootPresenter
      imageSource={imageSource}
      setImageSource={setImageSource}
      selectedFillColor={selectedFillColor}
      setSelectedFillColor={setSelectedFillColor}
      selectedStrokeWidth={selectedStrokeWidth}
      setSelectedStrokeWidth={setSelectedStrokeWidth}
    />
  )
}
