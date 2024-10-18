import type Konva from 'konva'
import { type FC, useEffect, useRef } from 'react'
import { Rect as KonvaRect } from 'react-konva'

import { Transformer } from '@/components/shapes/Transformer'
import { useHandleMouseDownShape, useTransform } from '@/hooks'

import type { RoundedRectProps } from './types'

export const RoundedRect: FC<RoundedRectProps> = ({
  disabledSelect,
  selected,
  setSelectedShapeIds,
  setShapeConfigList,
  ...props
}) => {
  const rectRef = useRef<Konva.Rect>(null)
  const transformerRef = useRef<Konva.Transformer>(null)

  useEffect(() => {
    if (selected && transformerRef.current && rectRef.current) {
      transformerRef.current.nodes([rectRef.current])
      transformerRef.current.getLayer()?.batchDraw()
    }
  }, [selected])

  const { onDragEnd, onTransformEnd } = useTransform(rectRef.current, setShapeConfigList)

  const { onMouseDown } = useHandleMouseDownShape(props.id, setSelectedShapeIds)

  return (
    <>
      <KonvaRect
        {...props}
        ref={rectRef}
        draggable={!disabledSelect}
        onMouseDown={disabledSelect ? undefined : onMouseDown}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
      />
      {selected && <Transformer ref={transformerRef} />}
    </>
  )
}
