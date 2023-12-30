export interface DropzoneProps {
  setImageSource: (source: string | null) => void
}

export interface DropzonePresenterProps {
  handleSelectFiles: (files: FileList) => void
}
