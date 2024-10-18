import type Konva from 'konva'
import { useCallback, useState } from 'react'

export const useRefCallback = <T extends Element | Konva.Node>(): [
  typeof ref,
  typeof callbackRef
] => {
  const [ref, setRef] = useState<T | null>(null)

  const callbackRef = useCallback((node: T): void => {
    setRef(node)
  }, [])

  return [ref, callbackRef]
}
