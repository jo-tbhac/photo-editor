import { Theme, css } from '@emotion/react'
import { FC } from 'react'

export const App: FC = () => {
  return <div css={styles.container}>Hello world!</div>
}

const styles = {
  container: ({ colors, styles }: Theme) => css`
    background-color: ${colors.app.primary.main};
    color: ${colors.font.contrast};
    padding: ${styles.padding.medium};
  `
}
