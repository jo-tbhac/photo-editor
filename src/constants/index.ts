export const ALLOWED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/png']

export const FILL_COLOR_LIST = [
  'rgb(255, 0, 0)',
  'rgb(255, 128, 23)',
  'rgb(255, 247, 0)',
  'rgb(0, 232, 0)',
  'rgb(25, 119, 255)',
  'rgb(252, 12, 89)',
  'rgb(255, 255, 255)',
  'rgb(0, 0, 0)'
]

export const STROKE_WIDTH_LIST = [2, 3, 4, 6, 8]

export const SHAPES = {
  arrow: 'arrow',
  text: 'text',
  rect: 'rect',
  roundedRect: 'roundedRect',
  oval: 'oval',
  line: 'line',
  pen: 'pen'
} as const

export const DEFAULT_ROUNDED_RECT_CORNER_RADIUS = 10
export const MIN_SHAPE_HEIGHT = 10
export const MIN_SHAPE_WIDTH = 10

export const LINE_HIT_STROKE_WIDTH = 20
export const MAX_ARROW_POINTER_WIDTH = 12

export const DEFAULT_FONT_STYLE = 'bold'
export const DEFAULT_FONT_SIZE = 24
export const DEFAULT_TEXT_STROKE_WIDTH = 0.2
export const DEFAULT_TEXT_STROKE_COLOR_LIGHT = '#fff'
export const DEFAULT_TEXT_STROKE_COLOR_DARK = '#666'
export const DEFAULT_TEXT_HIT_STROKE_WIDTH = 20
export const TEXT_LETTER_SPACING = 1
export const MIN_FONT_SIZE = 8
export const MIN_TEXT_STROKE_WIDTH = 0.1

// KonvaのTransformerのスタイルに合わせる
export const TRANSFORMER_ANCHOR_STROKE = 'rgb(0, 161, 255)'
export const TRANSFORMER_ANCHOR_FILL = 'rgb(255, 255, 255)'
export const TRANSFORMER_ANCHOR_HEIGHT = 10
export const TRANSFORMER_ANCHOR_WIDTH = 10
export const TRANSFORMER_ANCHOR_STROKE_WIDTH = 1

export const TRANSFORMER_NAME = 'transformer'
