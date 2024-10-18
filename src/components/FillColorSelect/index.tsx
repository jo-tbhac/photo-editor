import type { FC } from 'react'

import { FillColorSelectPresenter } from './presenter'
import type { FillColorSelectProps } from './types'

export const FillColorSelect: FC<FillColorSelectProps> = (props) => {
  return <FillColorSelectPresenter {...props} />
}
