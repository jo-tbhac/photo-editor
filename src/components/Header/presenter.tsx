import { Theme, css } from '@emotion/react'
import { FC } from 'react'

import { Button } from '@/components/commons/Button'
import { CircularProgress } from '@/components/commons/CircularProgress'
import { HEADER_HEIGHT } from '@/styles/constants'

import { HeaderPresenterProps } from './types'

export const HeaderPresenter: FC<HeaderPresenterProps> = ({ cancelEdit, exportImage, saving }) => {
  return (
    <div css={styles.container}>
      <div css={styles.buttonContainer}>
        <Button css={styles.button} variant="outlined" onClick={cancelEdit}>
          Cancel
        </Button>
        <Button
          css={styles.button}
          variant="contained"
          onClick={exportImage}
          disabled={saving}
          disableRipple
        >
          Export
          {saving && (
            <CircularProgress css={styles.progress} size={24} thickness={5} disableShrink />
          )}
        </Button>
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
  `,
  button: css`
    min-width: 120px;
  `,
  progress: css`
    position: absolute;
  `
}
