import type Konva from 'konva'

export interface HeaderProps {
  stageElement: Konva.Stage | null
  imageElement: HTMLImageElement
}

export interface HeaderPresenterProps {
  cancelEdit: () => void
  exportImage: () => void
  saving: boolean
}
