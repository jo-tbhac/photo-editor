import { FC } from 'react'
import { RoundedIconProps } from './types'

export const RoundedIcon: FC<RoundedIconProps> = (props) => (
  <svg
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>Rounded</title>
    <g id="rounded" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect
        id="Rectangle"
        stroke="#555555"
        strokeWidth="9"
        x="7.5"
        y="6.5"
        width="80"
        height="82"
        rx="25"
      />
    </g>
  </svg>
)
