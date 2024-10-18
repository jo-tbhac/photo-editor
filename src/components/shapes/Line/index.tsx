import type Konva from 'konva'
import { type FC, useEffect, useRef, useState } from 'react'
import { Group, Line as KonvaLine } from 'react-konva'

import { LineTransformer } from '@/components/shapes/LineTransformer'
import { useHandleMouseDownShape, useTransformLine } from '@/hooks'
import type { LinePointsPosition } from '@/types'

import type { LineProps } from './types'

export const Line: FC<LineProps> = ({
  disabledSelect,
  selected,
  setShapeConfigList,
  setSelectedShapeIds,
  ...props
}) => {
  const lineRef = useRef<Konva.Line>(null)

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

  const { onDragStart, onDragEnd } = useTransformLine(lineRef.current, setShapeConfigList)

  const { onMouseDown } = useHandleMouseDownShape(props.id, setSelectedShapeIds)

  // ドラッグでLineとTransformerを同時に移動させるためにグループ化する
  return (
    <Group draggable={!disabledSelect} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <KonvaLine {...props} ref={lineRef} onMouseDown={disabledSelect ? undefined : onMouseDown} />
      {transformerPosition && (
        <LineTransformer
          lineElement={lineRef.current}
          position={transformerPosition}
          setShapeConfigList={setShapeConfigList}
          setTransformerPosition={setTransformerPosition}
        />
      )}
    </Group>
  )
}
