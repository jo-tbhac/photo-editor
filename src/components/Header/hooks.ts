import Konva from 'konva'
import { useEffect, useState } from 'react'

import { TRANSFORMER_NAME } from '@/constants'

export const useBeforeUnload = () => {
  useEffect(() => {
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', onBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [])
}

export const useExportImage = ({
  stageElement,
  imageElement
}: { stageElement: Konva.Stage | null; imageElement: HTMLImageElement }) => {
  const [saving, setSaving] = useState(false)

  const exportImage = () => {
    if (!stageElement) {
      return
    }

    setSaving(true)

    // toDataURLの処理が重くてスレッドがブロックされてしまうので、Stateの更新による再レンダリングが終わるまで処理を遅らせる
    setTimeout(() => {
      // 画像にTransformerが写り込まないようにする
      const transformers = stageElement.find(`.${TRANSFORMER_NAME}`)
      for (const transformer of transformers) {
        transformer.visible(false)
      }

      // 画質が悪化しないようにする
      // https://stackoverflow.com/questions/54187464/konvajs-responsive-stage-and-todataurl-full/54190960#54190960
      const pixelRatio = imageElement.naturalWidth / stageElement.width()
      const uri = stageElement.toDataURL({ pixelRatio })
      const anchorElement = document.createElement('a')
      anchorElement.download = 'export.png'
      anchorElement.href = uri
      anchorElement.style.display = 'none'
      document.body.appendChild(anchorElement)
      anchorElement.click()
      anchorElement.remove()
      setSaving(false)
    }, 100)
  }

  return { saving, exportImage }
}
