import { Dispatch, SetStateAction } from 'react'

import { RectConfig, ShapeConfig } from '@/types'

export interface RectProps extends RectConfig {
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}
