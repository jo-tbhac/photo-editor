import type Konva from 'konva'
import type { Dispatch, MutableRefObject, SetStateAction } from 'react'

import type { ShapeConfig, TextConfig, TextEditorPosition } from '@/types'

export interface TextProps extends TextConfig {
  editTextRef: MutableRefObject<Konva.Text | null>
  disabledSelect: boolean
  selected: boolean
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
  setTextEditorPosition: Dispatch<SetStateAction<TextEditorPosition | null>>
}
