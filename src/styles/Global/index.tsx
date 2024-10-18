import { Global, type Theme, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import type { FC } from 'react'

import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/500.css'

export const GlobalStyles: FC = () => <Global styles={styles.global} />

const styles = {
  global: ({ colors, styles }: Theme) => css`
    ${emotionNormalize}
    html,
    body {
      background: white;
      color: ${colors.font.main};
      font-family: 'Noto Sans JP', sans-serif;
      margin: 0;
      min-height: 100%;
      padding: 0;
    }
    * {
      box-sizing: border-box;
      letter-spacing: 0.03em;
      outline: none;
    }
    ::-webkit-scrollbar {
      width: 9px;
    }
    ::-webkit-scrollbar:horizontal {
      height: 9px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 0;
    }
    ::-webkit-scrollbar-thumb {
      border-width: 0 1px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0);
      border-radius: ${styles.borderRadius.large};
      background-color: ${colors.border.main};
      background-clip: padding-box;
    }
    scrollbar-width: 9px;
  `
}
