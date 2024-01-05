import Konva from 'konva'
import { Dispatch, SetStateAction } from 'react'

export const useHandleMouseDownShape = (
  shapeId: string,
  setSelectedShapeIds: Dispatch<SetStateAction<string[]>>
) => {
  const onMouseDown = (event: Konva.KonvaEventObject<MouseEvent>) => {
    event.evt.stopPropagation()
    event.evt.preventDefault()
    setSelectedShapeIds((currentIds) => {
      if (currentIds.includes(shapeId)) {
        return currentIds
      }
      if (event.evt.shiftKey) {
        return [...currentIds, shapeId]
      }

      return [shapeId]
    })
  }

  return { onMouseDown }
}
