import React, { useMemo, useState } from 'react'
import SceneContext from './context/SceneContext'
import { Home } from './pages'
import './app.scss'

const App = () => {
  const [lightTop, switchLightTop] = useState(false)
  const [lightSide, switchLightSide] = useState(false)
  const [lightFront, switchLightFront] = useState(false)
  const [isIntro, setIsIntro] = useState(true)
  const [isSetup, setIsSetup] = useState(false)
  const [isOverview, setIsOverview] = useState(false)

  const value = useMemo(
    () => ({
      scene: {
        lightTop,
        lightSide,
        lightFront,
        steps: {
          isIntro,
          isSetup,
          isOverview
        }
      },
      action: {
        switchLightSide,
        switchLightTop,
        switchLightFront,
        setIsIntro,
        setIsSetup,
        setIsOverview
      }
    }),
    [lightTop, lightSide, lightFront, isIntro, isSetup, isOverview]
  )
  return (
    <SceneContext.Provider value={value}>
      <div className="app">
        <Home />
      </div>
    </SceneContext.Provider>
  )
}

export default App
