import Konva from 'konva'
import { FC, useEffect, useRef } from 'react'
import { Ellipse } from 'react-konva'

import { Transformer } from '@/components/shapes/Transformer'
import { useHandleMouseDownShape, useTransform } from '@/hooks'

import { OvalProps } from './types'

export const Oval: FC<OvalProps> = ({
  disabledSelect,
  selected,
  setShapeConfigList,
  setSelectedShapeIds,
  ...props
}) => {
  const ovalRef = useRef<Konva.Ellipse>(null)
  const transformerRef = useRef<Konva.Transformer>(null)

  useEffect(() => {
    if (selected && transformerRef.current && ovalRef.current) {
      transformerRef.current.nodes([ovalRef.current])
      transformerRef.current.getLayer()?.batchDraw()
    }
  }, [selected])

  const { onDragEnd, onTransformEnd } = useTransform(ovalRef.current, setShapeConfigList)

  const { onMouseDown } = useHandleMouseDownShape(props.id, setSelectedShapeIds)

  return (
    <>
      <Ellipse
        {...props}
        ref={ovalRef}
        draggable={!disabledSelect}
        onMouseDown={disabledSelect ? undefined : onMouseDown}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
      />
      {selected && <Transformer ref={transformerRef} />}
    </>
  )
}
