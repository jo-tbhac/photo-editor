import { Dispatch, SetStateAction } from 'react'

import { ArrowConfig, ShapeConfig } from '@/types'

export interface ArrowProps extends ArrowConfig {
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}
