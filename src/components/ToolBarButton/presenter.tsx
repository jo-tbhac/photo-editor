import { Theme, css } from '@emotion/react'
import { FC } from 'react'

import { IconButton } from '@/components/commons/IconButton'
import { Tooltip } from '@/components/commons/Tooltip'

import { ToolBarButtonPresenterProps } from './types'

export const ToolBarButtonPresenter: FC<ToolBarButtonPresenterProps> = ({
  tooltipText,
  active,
  Icon,
  onClick
}) => {
  return (
    <Tooltip title={tooltipText} placement="right">
      <IconButton
        disableRipple
        css={[styles.iconButton, active ? styles.activeIconButton : undefined]}
        onClick={onClick}
      >
        {Icon}
      </IconButton>
    </Tooltip>
  )
}

const styles = {
  iconButton: (theme: Theme) => css`
    border-radius: ${theme.styles.borderRadius.medium};
    padding: ${theme.styles.padding.xSmall};
  `,
  activeIconButton: (theme: Theme) => css`
    background-color: ${theme.colors.app.primary.light}22;
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
  `
}
