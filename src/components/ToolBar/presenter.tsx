import { Theme, css } from '@emotion/react'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faFont } from '@fortawesome/free-solid-svg-icons/faFont'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import { FillColorSelect } from '@components/FillColorSelect'
import { StrokeWidthSelect } from '@components/StrokeWidthSelect'
import { IconButton } from '@components/commons/IconButton'
import { Tooltip } from '@components/commons/Tooltip'
import { LineIcon } from '@icons/Line'
import { RoundedIcon } from '@icons/Rounded'
import { TOOLBAR_WIDTH } from '@styles/constants'

import { ToolBarPresenterProps } from './types'

export const ToolBarPresenter: FC<ToolBarPresenterProps> = ({
  selectedFillColor,
  setSelectedFillColor,
  selectedStrokeWidth,
  setSelectedStrokeWidth
}) => {
  return (
    <div css={styles.container}>
      <Tooltip title="四角形を挿入" placement="right">
        <IconButton css={styles.iconButton}>
          <FontAwesomeIcon icon={faSquare} css={styles.icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="角丸四角形を挿入" placement="right">
        <IconButton css={styles.iconButton}>
          <RoundedIcon css={styles.icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="円形を挿入" placement="right">
        <IconButton css={styles.iconButton}>
          <FontAwesomeIcon icon={faCircle} css={styles.icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="矢印を挿入" placement="right">
        <IconButton css={styles.iconButton}>
          <FontAwesomeIcon icon={faArrowDown} css={styles.icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="直線を挿入" placement="right">
        <IconButton css={styles.iconButton}>
          <LineIcon css={styles.icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="画像の上に描く" placement="right">
        <IconButton css={styles.iconButton}>
          <FontAwesomeIcon icon={faPen} css={styles.icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="テキストを挿入" placement="right">
        <IconButton css={styles.iconButton}>
          <FontAwesomeIcon icon={faFont} css={styles.icon} />
        </IconButton>
      </Tooltip>

      <div css={styles.divider} />

      <FillColorSelect
        selectedFillColor={selectedFillColor}
        setSelectedFillColor={setSelectedFillColor}
      />

      <StrokeWidthSelect
        selectedStrokeWidth={selectedStrokeWidth}
        setSelectedStrokeWidth={setSelectedStrokeWidth}
      />
    </div>
  )
}

const styles = {
  container: (theme: Theme) => css`
    align-items: center;
    background-color: ${theme.colors.background.main};
    display: flex;
    flex-direction: column;
    gap: ${theme.styles.margin.xxSmall};
    height: 100%;
    justify-content: center;
    padding: 0 ${theme.styles.padding.xSmall};
    width: ${TOOLBAR_WIDTH}px;
  `,
  iconButton: (theme: Theme) => css`
    border-radius: ${theme.styles.borderRadius.medium};
    padding: ${theme.styles.padding.xSmall};
  `,
  icon: (theme: Theme) => css`
    color: ${theme.colors.font.sub};
    height: 20px;
    width: 20px;
    &.fa-arrow-down {
      transform: rotate(45deg);
    }
    path {
      fill: ${theme.colors.font.sub};
    }
    rect, line {
      stroke: ${theme.colors.font.sub};
    }
  `,
  divider: (theme: Theme) => css`
    background-color: ${theme.colors.border.main};
    height: 1px;
    margin: ${theme.styles.margin.xSmall} 0;
    width: 100%;
  `
}
