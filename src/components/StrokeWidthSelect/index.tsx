import { FC } from 'react'

import { StrokeWidthSelectPresenter } from './presenter'
import { StrokeWidthSelectProps } from './types'

export const StrokeWidthSelect: FC<StrokeWidthSelectProps> = (props) => {
  return <StrokeWidthSelectPresenter {...props} />
}
