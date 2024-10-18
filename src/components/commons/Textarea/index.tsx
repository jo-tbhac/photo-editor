import { type Theme, css } from '@emotion/react'
import { forwardRef } from 'react'
import TextareaAutoSize from 'react-textarea-autosize'
import type { TextareaProps } from './types'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return <TextareaAutoSize ref={ref} css={styles.textarea} {...props} />
})

const styles = {
  textarea: (theme: Theme) => css`
    border: 1px solid ${theme.colors.border.main};
    border-radius: ${theme.styles.borderRadius.medium};
    color: ${theme.colors.font.main};
    padding: ${theme.styles.padding.xSmall} ${theme.styles.padding.small};
    resize: none;
    width: 100%;
    &::placeholder {
      color: ${theme.colors.font.placeholder};
    }
  `
}
