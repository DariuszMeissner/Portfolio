import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Stats } from '@react-three/drei'
import { Leva } from 'leva'
import './styles.scss'
import App from './App'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
    <Stats />
    <Leva collapsed />
  </Suspense>
)
