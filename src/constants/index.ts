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
