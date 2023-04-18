import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { configure } from './config'

configure()

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
