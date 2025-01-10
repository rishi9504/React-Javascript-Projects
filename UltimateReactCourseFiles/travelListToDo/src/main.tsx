import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from 'react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
