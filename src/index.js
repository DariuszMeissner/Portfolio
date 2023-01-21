import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.scss'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
)
