import type { SHAPES } from '@/constants'

export type Shapes = (typeof SHAPES)[keyof typeof SHAPES]
