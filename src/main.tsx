import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './App.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Root />
    </LanguageProvider>
  </StrictMode>,
)
