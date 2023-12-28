import { Theme, css } from '@emotion/react'
import { FC } from 'react'

import { Button } from '@components/commons/Button'
import { HEADER_HEIGHT } from '@styles/constants'

export const HeaderPresenter: FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.buttonContainer}>
        <Button variant="outlined">画像を書き出す</Button>
      </div>
    </div>
  )
}

const styles = {
  container: (theme: Theme) => css`
    align-items: center;
    border-bottom: solid 1px ${theme.colors.border.main};
    display: flex;
    height: ${HEADER_HEIGHT}px;
    padding: 0 ${theme.styles.padding.small};
    width: 100%;
  `,
  buttonContainer: css`
    display: flex;
    flex: 1;
    justify-content: flex-end;
  `
}
