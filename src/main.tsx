import { StrictMode } from 'react'

import App from '@/App'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/montserrat'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
