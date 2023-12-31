import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from '@/styles/Global'
import { ThemeProvider } from '@/styles/Provider'

import { App } from './App.tsx'

const root = document.getElementById('root')

if (root != null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}
