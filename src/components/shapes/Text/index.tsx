import Konva from 'konva'
import { FC, useEffect, useRef } from 'react'
import { Text as KonvaText } from 'react-konva'

import { Transformer } from '@/components/shapes/Transformer'
import { useHandleMouseDownShape, useTransform } from '@/hooks'

import { TextProps } from './types'

export const Text: FC<TextProps> = ({
  editTextRef,
  disabledSelect,
  selected,
  setShapeConfigList,
  setSelectedShapeIds,
  setTextEditorPosition,
  ...props
}) => {
  const textRef = useRef<Konva.Text>(null)
  const transformerRef = useRef<Konva.Transformer>(null)

  useEffect(() => {
    if (selected && transformerRef.current && textRef.current) {
      transformerRef.current.nodes([textRef.current])
      transformerRef.current.getLayer()?.batchDraw()
    }
  }, [selected])

  const { onDragEnd, onTransformEnd } = useTransform(textRef.current, setShapeConfigList)

  const { onMouseDown } = useHandleMouseDownShape(props.id, setSelectedShapeIds)

  // ダブルクリック時にテキストを編集する
  const onDblClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
    event.evt.preventDefault()

    if (!textRef.current) {
      return
    }

    // 選択状態を解除する
    setSelectedShapeIds((currentIds) => {
      return currentIds.filter((currentId) => currentId !== props.id)
    })
    // TextEditor側でTextを参照するためにRefに入れる
    editTextRef.current = textRef.current

    const { x, y } = textRef.current.getAbsolutePosition()
    const { offsetX, offsetY } = event.evt

    setTextEditorPosition({
      stageX: event.evt.pageX - offsetX,
      stageY: event.evt.pageY - offsetY,
      offsetX: x,
      offsetY: y
    })
  }

  return (
    <>
      <KonvaText
        {...props}
        ref={textRef}
        draggable={!disabledSelect}
        onMouseDown={disabledSelect ? undefined : onMouseDown}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
        onDblClick={onDblClick}
      />
      {selected && (
        <Transformer
          ref={transformerRef}
          rotateEnabled={false}
          padding={3}
          // アスペクト比を保ったままのスケーリングのみ有効にする
          enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
        />
      )}
    </>
  )
}
