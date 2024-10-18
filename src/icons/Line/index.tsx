import type { FC } from 'react'

import type { LineIconProps } from './types'

export const LineIcon: FC<LineIconProps> = (props) => (
  <svg
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>Line</title>
    <g
      id="line"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <line x1="15.5" y1="86.5" x2="84.5" y2="14.5" id="Line" stroke="#979797" strokeWidth="9" />
    </g>
  </svg>
)
