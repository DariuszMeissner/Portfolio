import React, { useEffect, useMemo, useState } from 'react'
import SceneContext from './context/SceneContext'
import { Home } from './pages'
import { fetchWorksData } from './utils/client'
import EngineOn from './assets/audio/lamboEngineOn.mp3'
import EngineOff from './assets/audio/lamboEngineOff.mp3'
import './App.scss'

export const audio = {
  engine: {
    on: new Audio(EngineOn),
    off: new Audio(EngineOff)
  }
}

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dataProject, setDataProject] = useState(null)
  const [isCarHover, setIsCarHover] = useState(false)
  const [isZoomGallery, setIsZoomGallery] = useState(false)
  const [works, setWorks] = useState(null)
  const [carLightEmissive, setCarLightEmissive] = useState(0)
  const [isEngineOn, setIsEngineOn] = useState(false)

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

  useEffect(() => {
    fetchWorksData().then((data) => setWorks(data))
  }, [])

  const value = useMemo(
    () => ({
      scene: {
        lightTop,
        lightSide,
        lightFront,
        isAllLightsOn,
        isStartEngine,
        isModalOpen,
        dataProject,
        isCarHover,
        isZoomGallery,
        works,
        isEngineOn,
        carLightEmissive,
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
        setIsWorksPage,
        setIsModalOpen,
        setDataProject,
        setIsCarHover,
        setIsZoomGallery,
        setCarLightEmissive,
        setIsEngineOn
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
      isWorksPage,
      isModalOpen,
      dataProject,
      isCarHover,
      isZoomGallery,
      works,
      carLightEmissive,
      isEngineOn
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
