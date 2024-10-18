import type Konva from 'konva'
import type { Dispatch, MutableRefObject, SetStateAction } from 'react'

import type { ShapeConfig, TextEditorPosition } from '@/types'

export interface TextEditorProps {
  drawLayerElement: Konva.Layer | null
  editTextRef: MutableRefObject<Konva.Text | null>
  selectedFillColor: string
  position: TextEditorPosition
  setTextEditorPosition: Dispatch<SetStateAction<TextEditorPosition | null>>
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
}
