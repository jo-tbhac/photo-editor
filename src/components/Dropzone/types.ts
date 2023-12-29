export interface DropzoneProps {
  setImageSource: (source: string | null) => void
}

export interface DropzonePresenterProps {
  handleDropFiles: (files: FileList) => void
}
