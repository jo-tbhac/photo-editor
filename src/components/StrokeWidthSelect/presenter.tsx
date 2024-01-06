import { Theme, css } from '@emotion/react'
import { FC, useRef, useState } from 'react'

import { Popover } from '@/components/commons/Popover'
import { Tooltip } from '@/components/commons/Tooltip'
import { STROKE_WIDTH_LIST } from '@/constants'

import { StrokeWidthSelectPresenterProps } from './types'

export const StrokeWidthSelectPresenter: FC<StrokeWidthSelectPresenterProps> = ({
  selectedStrokeWidth,
  handleChangeStrokeWidth
}) => {
  const anchorEl = useRef<HTMLButtonElement>(null)

  const [popoverVisible, setPopoverVisible] = useState(false)

  const openPopover = () => {
    setPopoverVisible(true)
  }

  const closePopover = () => {
    setPopoverVisible(false)
  }

  return (
    <>
      <Tooltip title="Stroke width" placement="right">
        <button ref={anchorEl} type="button" css={styles.button} onClick={openPopover}>
          {selectedStrokeWidth}
        </button>
      </Tooltip>

      <Popover
        open={popoverVisible}
        anchorEl={anchorEl.current}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <div css={styles.popover}>
          {STROKE_WIDTH_LIST.map((width) => (
            <button
              key={width}
              type="button"
              css={styles.listButton}
              onClick={() => {
                handleChangeStrokeWidth(width)
                closePopover()
              }}
            >
              <div css={styles.strokeWidthIcon} style={{ width }} />
              <div css={styles.strokeWidthLabel}>{width}</div>
            </button>
          ))}
        </div>
      </Popover>
    </>
  )
}

const styles = {
  button: (theme: Theme) => css`
    background: none;
    border: solid 1px ${theme.colors.border.main};
    border-radius: 50%;
    color: ${theme.colors.font.sub};
    cursor: pointer;
    font-size: ${theme.styles.fontSize.small};
    height: 25px;
    margin: ${theme.styles.margin.xxSmall} 0;
    padding: 0;
    width: 25px;
    &::after {
      content: 'px';
      font-size: ${theme.styles.fontSize.xxSmall};
    }
  `,
  popover: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.styles.margin.small};
    padding: ${theme.styles.padding.xSmall};
  `,
  listButton: (theme: Theme) => css`
    background: ${theme.colors.background.main};
    border: none;
    border-radius: ${theme.styles.borderRadius.medium};
    cursor: pointer;
    padding: ${theme.styles.padding.xxSmall} ${theme.styles.padding.xSmall};
    &:hover {
      background-color: ${theme.colors.background.hover.sub};
    }
  `,
  strokeWidthIcon: (theme: Theme) => css`
    background-color: ${theme.colors.font.main};
    height: 30px;
    margin: 0 auto;
    transform: rotate(45deg);
  `,
  strokeWidthLabel: (theme: Theme) => css`
    color: ${theme.colors.font.main};
    font-size: ${theme.styles.fontSize.small};
    text-align: center;
    &::after {
      content: 'px';
      font-size: ${theme.styles.fontSize.xxSmall};
    }
  `
}
