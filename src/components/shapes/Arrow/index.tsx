import type Konva from 'konva'
import { type FC, useEffect, useRef, useState } from 'react'
import { Arrow as KonvaArrow, Group } from 'react-konva'

import { LineTransformer } from '@/components/shapes/LineTransformer'
import { useHandleMouseDownShape, useTransformLine } from '@/hooks'
import type { LinePointsPosition } from '@/types'

import type { ArrowProps } from './types'

export const Arrow: FC<ArrowProps> = ({
  disabledSelect,
  selected,
  setShapeConfigList,
  setSelectedShapeIds,
  ...props
}) => {
  const arrowRef = useRef<Konva.Arrow>(null)

  const [transformerPosition, setTransformerPosition] = useState<LinePointsPosition | null>(null)

  useEffect(() => {
    if (!selected) {
      setTransformerPosition(null)
      return
    }
    if (!props.points) {
      return
    }

    setTransformerPosition({
      x1: props.points[0],
      y1: props.points[1],
      x2: props.points[2],
      y2: props.points[3]
    })
  }, [props.points, selected])

  const { onDragStart, onDragEnd } = useTransformLine(arrowRef.current, setShapeConfigList)

  const { onMouseDown } = useHandleMouseDownShape(props.id, setSelectedShapeIds)

  // ドラッグでLineとTransformerを同時に移動させるためにグループ化する
  return (
    <Group draggable={!disabledSelect} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <KonvaArrow
        {...props}
        ref={arrowRef}
        onMouseDown={disabledSelect ? undefined : onMouseDown}
      />
      {transformerPosition && (
        <LineTransformer
          lineElement={arrowRef.current}
          position={transformerPosition}
          setShapeConfigList={setShapeConfigList}
          setTransformerPosition={setTransformerPosition}
        />
      )}
    </Group>
  )
}
