import Konva from 'konva'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { ShapeConfig, TextEditorPosition } from '@/types'

export interface TextEditorProps {
  drawLayerElement: Konva.Layer | null
  editTextRef: MutableRefObject<Konva.Text | null>
  selectedFillColor: string
  position: TextEditorPosition
  setTextEditorPosition: Dispatch<SetStateAction<TextEditorPosition | null>>
  setShapeConfigList: Dispatch<SetStateAction<ShapeConfig[]>>
}
