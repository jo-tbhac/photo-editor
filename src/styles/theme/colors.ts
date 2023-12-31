const appColor = {
  primary: {
    main: '#d81b60',
    light: '#df487f',
    dark: '#971243'
  }
} as const

export const colors = {
  app: {
    primary: appColor.primary
  },
  button: {
    primary: appColor.primary.main,
    secondary: '#f8f8f8'
  },
  outline: {
    main: appColor.primary.main,
    dark: '#999'
  },
  font: {
    main: '#555',
    sub: '#777',
    error: '#c7254e',
    placeholder: '#ababab',
    contrast: '#fff',
    info: '#337ab7'
  },
  background: {
    main: '#fff',
    sub: '#f4f4f4',
    hover: {
      main: 'rgba(250,250,250,0.6)',
      sub: 'rgba(0,0,0,0.04)'
    }
  },
  border: {
    main: '#e0e0e0',
    light: '#f0f0f0',
    dark: '#999'
  }
} as const
