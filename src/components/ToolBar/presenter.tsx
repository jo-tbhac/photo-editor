import { type Theme, css } from '@emotion/react'
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle'
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faFont } from '@fortawesome/free-solid-svg-icons/faFont'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, MouseEvent } from 'react'

import { FillColorSelect } from '@/components/FillColorSelect'
import { StrokeWidthSelect } from '@/components/StrokeWidthSelect'
import { ToolBarButton } from '@/components/ToolBarButton'
import { SHAPES } from '@/constants'
import { LineIcon } from '@/icons/Line'
import { RoundedIcon } from '@/icons/Rounded'
import { STAGE_CONTAINER_MIN_HEIGHT, TOOLBAR_WIDTH } from '@/styles/constants'

import type { ToolBarPresenterProps } from './types'

export const ToolBarPresenter: FC<ToolBarPresenterProps> = ({
  selectedFillColor,
  selectedStrokeWidth,
  selectedShape,
  setSelectedShape,
  handleChangeFillColor,
  handleChangeStrokeWidth
}) => {
  const onClickRect = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedShape(SHAPES.rect)
  }

  const onClickRoundedRect = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedShape(SHAPES.roundedRect)
  }

  const onClickOval = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedShape(SHAPES.oval)
  }

  const onClickArrow = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedShape(SHAPES.arrow)
  }

  const onClickLine = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedShape(SHAPES.line)
  }

  const onClickPen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedShape(SHAPES.pen)
  }

  const onClickText = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSelectedShape(SHAPES.text)
  }

  return (
    <div css={styles.container}>
      <ToolBarButton
        tooltipText="Rectangle"
        active={selectedShape === SHAPES.rect}
        Icon={<FontAwesomeIcon icon={faSquare} css={styles.icon} />}
        onClick={onClickRect}
      />
      <ToolBarButton
        tooltipText="Rounded rectangle"
        active={selectedShape === SHAPES.roundedRect}
        Icon={<RoundedIcon css={styles.icon} />}
        onClick={onClickRoundedRect}
      />
      <ToolBarButton
        tooltipText="Ellipse"
        active={selectedShape === SHAPES.oval}
        Icon={<FontAwesomeIcon icon={faCircle} css={styles.icon} />}
        onClick={onClickOval}
      />
      <ToolBarButton
        tooltipText="Arrow"
        active={selectedShape === SHAPES.arrow}
        Icon={<FontAwesomeIcon icon={faArrowDown} css={styles.icon} />}
        onClick={onClickArrow}
      />
      <ToolBarButton
        tooltipText="Line"
        active={selectedShape === SHAPES.line}
        Icon={<LineIcon css={styles.icon} />}
        onClick={onClickLine}
      />
      <ToolBarButton
        tooltipText="Pencil"
        active={selectedShape === SHAPES.pen}
        Icon={<FontAwesomeIcon icon={faPen} css={styles.icon} />}
        onClick={onClickPen}
      />
      <ToolBarButton
        tooltipText="Text"
        active={selectedShape === SHAPES.text}
        Icon={<FontAwesomeIcon icon={faFont} css={styles.icon} />}
        onClick={onClickText}
      />

      <div css={styles.divider} />

      <FillColorSelect
        selectedFillColor={selectedFillColor}
        handleChangeFillColor={handleChangeFillColor}
      />

      <StrokeWidthSelect
        selectedStrokeWidth={selectedStrokeWidth}
        handleChangeStrokeWidth={handleChangeStrokeWidth}
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
    min-height: ${STAGE_CONTAINER_MIN_HEIGHT}px;
    padding: 0 ${theme.styles.padding.xSmall};
    width: ${TOOLBAR_WIDTH}px;
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
    flex-shrink: 0;
    height: 1px;
    margin: ${theme.styles.margin.xSmall} 0;
    width: 100%;
  `
}
