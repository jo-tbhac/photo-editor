import { FC } from 'react'

import { HeaderPresenter } from './presenter'
import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ setImageSource }) => {
  const cancelEdit = () => {
    // TODO confirm
    setImageSource(null)
  }

  return <HeaderPresenter cancelEdit={cancelEdit} />
}
