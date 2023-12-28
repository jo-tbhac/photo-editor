import { Theme, css } from '@emotion/react'
import { FC } from 'react'

export const StagePresenter: FC = () => {
  return <div css={styles.container}>AAA</div>
}

const styles = {
  container: (theme: Theme) => css`
    background-color: ${theme.colors.background.sub};
    flex: 1;
  `
}
