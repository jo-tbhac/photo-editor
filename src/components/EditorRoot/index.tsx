import { FC } from 'react'

import { useFillColor, useImageSource, useStrokeWidth } from './hooks'
import { EditorRootPresenter } from './presenter'

export const EditorRoot: FC = () => {
  const { imageSource, setImageSource } = useImageSource()
  const { selectedFillColor, setSelectedFillColor } = useFillColor()
  const { selectedStrokeWidth, setSelectedStrokeWidth } = useStrokeWidth()

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
