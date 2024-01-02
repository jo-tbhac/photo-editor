import type Konva from 'konva'

import type { SHAPES } from '@/constants'

export type Shapes = (typeof SHAPES)[keyof typeof SHAPES]

export interface RectConfig extends Konva.RectConfig {
  id: string
  type: typeof SHAPES.rect
}

export interface RoundedRectConfig extends Konva.RectConfig {
  id: string
  type: typeof SHAPES.roundedRect
}

export interface OvalConfig extends Konva.EllipseConfig {
  id: string
  type: typeof SHAPES.oval
}

export interface LineConfig extends Konva.LineConfig {
  id: string
  type: typeof SHAPES.line
}

export interface ArrowConfig extends Konva.ArrowConfig {
  id: string
  type: typeof SHAPES.arrow
}

export interface FreeLineConfig extends Konva.LineConfig {
  id: string
  type: typeof SHAPES.pen
}

export type ShapeConfig =
  | RectConfig
  | RoundedRectConfig
  | OvalConfig
  | LineConfig
  | ArrowConfig
  | FreeLineConfig

export interface LinePointsPosition {
  x1: number
  y1: number
  x2: number
  y2: number
}
