import type { Dispatch, SetStateAction } from 'react'

import type { RoundedRectConfig, ShapeConfig } from '@/types'

export interface RoundedRectProps extends RoundedRectConfig {
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}
