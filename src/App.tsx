import { css } from '@emotion/react'
import { FC } from 'react'

import { Header } from '@components/Header'
import { Stage } from '@components/Stage'
import { ToolBar } from '@components/ToolBar'
import { HEADER_HEIGHT } from '@styles/constants'

export const App: FC = () => {
  return (
    <div css={styles.container}>
      <Header />
      <div css={styles.body}>
        <ToolBar />
        <Stage />
      </div>
    </div>
  )
}

const styles = {
  container: css`
    height: 100vh;
    width: 100%;
  `,
  body: css`
    display: flex;
    height: calc(100vh - ${HEADER_HEIGHT}px);
  `
}
