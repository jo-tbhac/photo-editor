import Konva from 'konva'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { ShapeConfig, TextConfig, TextEditorPosition } from '@/types'

export interface TextProps extends TextConfig {
  editTextRef: MutableRefObject<Konva.Text | null>
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
  setTextEditorPosition: Dispatch<SetStateAction<TextEditorPosition | null>>
}
