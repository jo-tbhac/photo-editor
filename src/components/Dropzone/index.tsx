import { FC } from 'react'

import { ALLOWED_IMAGE_MIME_TYPES } from '@/constants'

import { DropzonePresenter } from './presenter'
import { DropzoneProps } from './types'

export const Dropzone: FC<DropzoneProps> = ({ setImageSource }) => {
  const handleSelectFiles = (files: FileList) => {
    const imageFile = Array.from(files).find((file) => ALLOWED_IMAGE_MIME_TYPES.includes(file.type))
    if (imageFile == null) {
      // TODO show alert
      return
    }

    setImageSource(URL.createObjectURL(imageFile))
  }

  return <DropzonePresenter handleSelectFiles={handleSelectFiles} />
}
