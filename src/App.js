import React, { useEffect, useMemo, useState } from 'react'
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
  const [isStartEngine, setIsStartEngine] = useState(false)
  const [isAllLightsOn, setIsAllLightsOn] = useState(false)
  const [isWorksPage, setIsWorksPage] = useState(false)
  const [isAboutPage, setIsAboutPage] = useState(false)

  useEffect(() => {
    const allLightsOn = lightTop && lightSide && lightFront

    if (allLightsOn) {
      setIsAllLightsOn(true)
    } else {
      setIsAllLightsOn(false)
    }

    if (isStartEngine) {
      setIsOverview(true)
    }
  }, [lightTop, lightFront, lightSide, isStartEngine, isAllLightsOn])

  const value = useMemo(
    () => ({
      scene: {
        lightTop,
        lightSide,
        lightFront,
        isAllLightsOn,
        isStartEngine,
        steps: {
          isIntro,
          isSetup,
          isOverview
        },
        pages: {
          isAboutPage,
          isWorksPage
        }
      },
      action: {
        switchLightSide,
        switchLightTop,
        switchLightFront,
        setIsIntro,
        setIsSetup,
        setIsOverview,
        setIsStartEngine,
        setIsAllLightsOn,
        setIsAboutPage,
        setIsWorksPage
      }
    }),
    [
      lightTop,
      lightSide,
      lightFront,
      isIntro,
      isSetup,
      isOverview,
      isStartEngine,
      isAllLightsOn,
      isAboutPage,
      isWorksPage
    ]
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
