import { FC } from 'react'

import { useBeforeUnload } from './hooks'
import { HeaderPresenter } from './presenter'

export const Header: FC = () => {
  useBeforeUnload()

  const cancelEdit = () => {
    window.location.reload()
  }

  return <HeaderPresenter cancelEdit={cancelEdit} />
}
