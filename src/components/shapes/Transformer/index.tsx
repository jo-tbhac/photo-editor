import Konva from 'konva'
import { forwardRef } from 'react'
import { Transformer as KonvaTransformer } from 'react-konva'

import { MIN_SHAPE_HEIGHT, MIN_SHAPE_WIDTH } from '@/constants'

import { TransformerProps } from './types'

export const Transformer = forwardRef<Konva.Transformer, TransformerProps>(
  (
    {
      enabledAnchors,
      resizeEnabled = true,
      rotateEnabled = true,
      padding = 0,
      shouldOverdrawWholeArea = false
    },
    ref
  ) => {
    return (
      <KonvaTransformer
        ref={ref}
        enabledAnchors={enabledAnchors}
        resizeEnabled={resizeEnabled}
        rotateEnabled={rotateEnabled}
        padding={padding}
        ignoreStroke
        shouldOverdrawWholeArea={shouldOverdrawWholeArea}
        onMouseDown={(e) => {
          e.evt.stopPropagation()
          e.evt.preventDefault()
        }}
        boundBoxFunc={(oldBox, newBox) => {
          if (newBox.width < MIN_SHAPE_WIDTH || newBox.height < MIN_SHAPE_HEIGHT) {
            return oldBox
          }

          return newBox
        }}
      />
    )
  }
)
