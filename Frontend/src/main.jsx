import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LegacyPassHero from './LegacyPassHero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LegacyPassHero/>
  </StrictMode>,
)
