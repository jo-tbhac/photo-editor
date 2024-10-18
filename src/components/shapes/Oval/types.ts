import type { Dispatch, SetStateAction } from 'react'

import type { OvalConfig, ShapeConfig } from '@/types'

export interface OvalProps extends OvalConfig {
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}
