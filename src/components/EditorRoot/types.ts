export interface EditorRootPresenterProps {
  imageSource: string | null
  setImageSource: (source: string | null) => void
  selectedFillColor: string
  setSelectedFillColor: (fillColor: string) => void
}
