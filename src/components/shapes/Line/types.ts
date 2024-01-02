import { Dispatch, SetStateAction } from 'react'

import { LineConfig, ShapeConfig } from '@/types'

export interface LineProps extends LineConfig {
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
}
