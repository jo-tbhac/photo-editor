import { Theme, css } from '@emotion/react'
import { FC } from 'react'

import { TOOLBAR_WIDTH } from '@styles/constants'

export const ToolBarPresenter: FC = () => {
  return <div css={styles.container} />
}

const styles = {
  container: (theme: Theme) => css`
    background-color: ${theme.colors.background.main};
    height: 100%;
    width: ${TOOLBAR_WIDTH}px;
  `
}
