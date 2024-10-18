import type { Dispatch, SetStateAction } from 'react'

import type { FreeLineConfig, ShapeConfig } from '@/types'

export interface FreeLineProps extends FreeLineConfig {
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}
