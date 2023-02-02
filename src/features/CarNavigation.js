import React, { useRef, useCallback, useEffect, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Button3D, Layout } from '../components'
import { audio } from '../App'
import { StartStopEngine } from './index'
import SceneContext from '../context/SceneContext'

const initialState = {
  maxEmissiveCarLight: 4,
  delayEngineSound: 600,
  delayCarLightsOn: 1000
}

const style = {
  container: {
    position: 'absolute',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    zIndex: '3'
  }
}

const CarNavigation = () => {
  const { scene, action } = useContext(SceneContext)
  const buttonRef = useRef(null)
  const intervalIncreaseLightRef = useRef(null)

  function turnOnEngineSound() {
    if (!scene.isEngineOn) {
      setTimeout(() => {
        audio.engine.on.play()
      }, initialState.delayEngineSound)

      action.setIsEngineOn(true)
    }
  }

  function turnOffEngineSound() {
    if (scene.isEngineOn) {
      audio.engine.on.currentTime = 0
      audio.engine.on.pause()
      action.setIsEngineOn(false)

      audio.engine.off.play()
    }
  }

  function increaseCarLightsEmissive() {
    if (scene.carLightEmissive === 0) {
      const interval = setInterval(() => {
        action.setCarLightEmissive((prev) => prev + 1)
      }, 50)
      intervalIncreaseLightRef.current = interval
    }
  }

  function stopEngine() {
    action.setIsStartEngine(false)
    action.setCarLightEmissive(0)
    turnOffEngineSound()
  }

  function startEngine() {
    setTimeout(() => {
      action.setIsStartEngine(true)
    }, initialState.delayCarLightsOn)

    increaseCarLightsEmissive()
    turnOnEngineSound()
  }

  function startStopEngine() {
    if (scene.isStartEngine) {
      stopEngine()
    } else {
      startEngine()
    }
  }

  const stopIncreaseCarLight = useCallback(() => {
    if (
      scene.carLightEmissive > initialState.maxEmissiveCarLight &&
      !scene.isStartEngine
    ) {
      clearInterval(intervalIncreaseLightRef.current)
    }
  }, [scene.carLightEmissive, scene.isStartEngine])

  useEffect(() => {
    stopIncreaseCarLight()
  }, [scene.carLightEmissive, scene.isStartEngine, stopIncreaseCarLight])

  const handleStartEngine = () => {
    startStopEngine()
  }

  return (
    <div className="car-navigation">
      <Layout styles={style.container}>
        <Button3D
          title="light top"
          onClick={() => action.switchLightTop((prev) => !prev)}
          isOverview={scene.steps.isOverview}
        />
        <Button3D
          title="light side"
          onClick={() => action.switchLightSide((prev) => !prev)}
          isOverview={scene.steps.isOverview}
        />
        <Button3D
          title="light front"
          onClick={() => action.switchLightFront((prev) => !prev)}
          isOverview={scene.steps.isOverview}
        />

        <CSSTransition
          in={scene.isAllLightsOn || scene.steps.isOverview}
          nodeRef={buttonRef}
          timeout={2000}
          classNames="fade"
          unmountOnExit>
          <div ref={buttonRef}>
            <StartStopEngine
              handleStartEngine={handleStartEngine}
              isOverview={scene.steps.isOverview}
            />
          </div>
        </CSSTransition>
      </Layout>
    </div>
  )
}

export default CarNavigation
