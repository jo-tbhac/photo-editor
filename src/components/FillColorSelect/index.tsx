import { FC } from 'react'

import { FillColorSelectPresenter } from './presenter'
import { FillColorSelectProps } from './types'

export const FillColorSelect: FC<FillColorSelectProps> = (props) => {
  return <FillColorSelectPresenter {...props} />
}
