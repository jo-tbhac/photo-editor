import { Theme, css } from '@emotion/react'
import { FC, useRef, useState } from 'react'

import { Popover } from '@components/commons/Popover'
import { Tooltip } from '@components/commons/Tooltip'
import { FILL_COLOR_LIST } from '@constants/index'

import { FillColorSelectPresenterProps } from './types'

export const FillColorSelectPresenter: FC<FillColorSelectPresenterProps> = ({
  selectedFillColor,
  setSelectedFillColor
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
      <Tooltip title="線の色" placement="right">
        <button
          ref={anchorEl}
          type="button"
          css={styles.button}
          style={{ backgroundColor: selectedFillColor }}
          onClick={openPopover}
        />
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
          {FILL_COLOR_LIST.map((color) => (
            <button
              key={color}
              type="button"
              css={styles.button}
              style={{ backgroundColor: color }}
              onClick={() => {
                setSelectedFillColor(color)
                closePopover()
              }}
            />
          ))}
        </div>
      </Popover>
    </>
  )
}

const styles = {
  button: (theme: Theme) => css`
    border: solid 1px ${theme.colors.border.main};
    border-radius: 50%;
    cursor: pointer;
    height: 25px;
    width: 25px;
  `,
  popover: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.styles.margin.xSmall};
    padding: ${theme.styles.padding.xSmall};
  `
}
