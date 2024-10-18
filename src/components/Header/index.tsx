import type { FC } from 'react'

import { useBeforeUnload, useExportImage } from './hooks'
import { HeaderPresenter } from './presenter'
import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ stageElement, imageElement }) => {
  const { exportImage, saving } = useExportImage({ stageElement, imageElement })

  useBeforeUnload()

  const cancelEdit = () => {
    window.location.reload()
  }

  return <HeaderPresenter cancelEdit={cancelEdit} exportImage={exportImage} saving={saving} />
}
