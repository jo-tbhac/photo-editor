import type Konva from 'konva'
import { type FC, useEffect, useRef } from 'react'
import { Line } from 'react-konva'

import { Transformer } from '@/components/shapes/Transformer'
import { useHandleMouseDownShape, useTransform } from '@/hooks'

import type { FreeLineProps } from './types'

export const FreeLine: FC<FreeLineProps> = ({
  disabledSelect,
  selected,
  setShapeConfigList,
  setSelectedShapeIds,
  ...props
}) => {
  const freeLineRef = useRef<Konva.Line>(null)
  const transformerRef = useRef<Konva.Transformer>(null)

  useEffect(() => {
    if (selected && transformerRef.current && freeLineRef.current) {
      transformerRef.current.nodes([freeLineRef.current])
      transformerRef.current.getLayer()?.batchDraw()
    }
  }, [selected])

  const { onDragEnd, onTransformEnd } = useTransform(freeLineRef.current, setShapeConfigList)

  const { onMouseDown } = useHandleMouseDownShape(props.id, setSelectedShapeIds)

  return (
    <>
      <Line
        {...props}
        ref={freeLineRef}
        onMouseDown={disabledSelect ? undefined : onMouseDown}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
      />
      {selected && (
        <Transformer ref={transformerRef} resizeEnabled={false} shouldOverdrawWholeArea />
      )}
    </>
  )
}
