import type Konva from 'konva'
import type { FC } from 'react'
import { Group, Rect } from 'react-konva'

import {
  TRANSFORMER_ANCHOR_FILL,
  TRANSFORMER_ANCHOR_HEIGHT,
  TRANSFORMER_ANCHOR_STROKE,
  TRANSFORMER_ANCHOR_STROKE_WIDTH,
  TRANSFORMER_ANCHOR_WIDTH,
  TRANSFORMER_NAME
} from '@/constants'

import { useDragLineAnchor } from './hooks'
import type { LineTransformerProps } from './types'

export const LineTransformer: FC<LineTransformerProps> = ({
  lineElement,
  position,
  setShapeConfigList,
  setTransformerPosition
}) => {
  const { onDragMoveAnchor1, onDragMoveAnchor2, onDragEndAnchor } = useDragLineAnchor({
    lineElement,
    position,
    setShapeConfigList,
    setTransformerPosition
  })

  const onMouseDown = (event: Konva.KonvaEventObject<MouseEvent>) => {
    event.evt.stopPropagation()
  }

  return (
    <Group name={TRANSFORMER_NAME}>
      <Rect
        height={TRANSFORMER_ANCHOR_HEIGHT}
        width={TRANSFORMER_ANCHOR_WIDTH}
        strokeWidth={TRANSFORMER_ANCHOR_STROKE_WIDTH}
        stroke={TRANSFORMER_ANCHOR_STROKE}
        fill={TRANSFORMER_ANCHOR_FILL}
        offsetX={TRANSFORMER_ANCHOR_WIDTH / 2}
        offsetY={TRANSFORMER_ANCHOR_HEIGHT / 2}
        x={position.x1}
        y={position.y1}
        onMouseDown={onMouseDown}
        onDragMove={onDragMoveAnchor1}
        onDragEnd={onDragEndAnchor}
        draggable
      />
      <Rect
        height={TRANSFORMER_ANCHOR_HEIGHT}
        width={TRANSFORMER_ANCHOR_WIDTH}
        strokeWidth={TRANSFORMER_ANCHOR_STROKE_WIDTH}
        stroke={TRANSFORMER_ANCHOR_STROKE}
        fill={TRANSFORMER_ANCHOR_FILL}
        offsetX={TRANSFORMER_ANCHOR_WIDTH / 2}
        offsetY={TRANSFORMER_ANCHOR_HEIGHT / 2}
        x={position.x2}
        y={position.y2}
        onMouseDown={onMouseDown}
        onDragMove={onDragMoveAnchor2}
        onDragEnd={onDragEndAnchor}
        draggable
      />
    </Group>
  )
}
