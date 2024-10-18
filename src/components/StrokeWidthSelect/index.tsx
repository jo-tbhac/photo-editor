import type { FC } from 'react'

import { StrokeWidthSelectPresenter } from './presenter'
import type { StrokeWidthSelectProps } from './types'

export const StrokeWidthSelect: FC<StrokeWidthSelectProps> = (props) => {
  return <StrokeWidthSelectPresenter {...props} />
}
