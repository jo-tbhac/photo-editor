import { FC } from 'react'

import { useImage, useImageSize } from './hooks'
import { StagePresenter } from './presenter'
import { StageProps } from './types'

export const Stage: FC<StageProps> = ({ imageSource }) => {
  const imageElement = useImage(imageSource)
  const imageSize = useImageSize(imageElement)

  return <StagePresenter imageElement={imageElement} imageSize={imageSize} />
}
