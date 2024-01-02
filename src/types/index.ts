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

export type ShapeConfig = RectConfig | RoundedRectConfig | OvalConfig
