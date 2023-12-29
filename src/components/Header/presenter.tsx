import { Theme, css } from '@emotion/react'
import { FC } from 'react'

import { Button } from '@components/commons/Button'
import { HEADER_HEIGHT } from '@styles/constants'

import { HeaderPresenterProps } from './types'

export const HeaderPresenter: FC<HeaderPresenterProps> = ({ cancelEdit }) => {
  return (
    <div css={styles.container}>
      <div css={styles.buttonContainer}>
        <Button variant="outlined" onClick={cancelEdit}>
          編集をやめる
        </Button>
        <Button variant="contained">画像を書き出す</Button>
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
  buttonContainer: (theme: Theme) => css`
    display: flex;
    flex: 1;
    gap: ${theme.styles.margin.small};
    justify-content: flex-end;
  `
}
