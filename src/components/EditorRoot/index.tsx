import { FC } from 'react'

import { useImageSource } from './hooks'
import { EditorRootPresenter } from './presenter'

export const EditorRoot: FC = () => {
  const { imageSource, setImageSource } = useImageSource()

  return <EditorRootPresenter imageSource={imageSource} setImageSource={setImageSource} />
}
