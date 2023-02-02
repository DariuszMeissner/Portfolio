import React, { useRef, useEffect, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Button3D, Layout } from '../components'
import { audio } from '../App'
import { StartStopEngine } from './index'
import { DataContext } from '../context/DataContext'
import { SceneLightsContext } from '../context/SceneLightsContext'
import { SceneCarContext } from '../context/SceneCarContext'

const initState = {
  carlightEmissive: 8,
  delayEngineSound: 1000,
  delayCarLightsOn: 600
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
  const { steps, openStepOverview } = useContext(DataContext)
  const { lights, setTopLight, setFrontLight, setSideLight } =
    useContext(SceneLightsContext)
  const { carState, carActions } = useContext(SceneCarContext)

  const buttonRef = useRef(null)

  function turnOnEngineSound() {
    if (!carState.isEngineOn) {
      setTimeout(() => {
        audio.engine.on.play()
      }, initState.delayCarLightsOn)
    }
  }

  function turnOffEngineSound() {
    if (carState.isEngineOn) {
      audio.engine.on.currentTime = 0
      audio.engine.on.pause()

      audio.engine.off.play()
    }
  }

  function stopEngine() {
    carActions.setEngineOff()
    carActions.setCarLightEmissive(0)
    turnOffEngineSound()
  }

  function startEngine() {
    setTimeout(() => {
      carActions.setEngineOn()
    }, initState.delayEngineSound)

    carActions.setCarLightEmissive(initState.carlightEmissive)
    turnOnEngineSound()
  }

  function startStopEngine() {
    if (carState.isEngineOn) {
      stopEngine()
    } else {
      startEngine()
    }
  }

  const handleStartEngine = () => {
    startStopEngine()
  }

  useEffect(() => {
    if (carState.isEngineOn) {
      openStepOverview()
    }
  }, [carState.isEngineOn, openStepOverview])

  return (
    <div className="car-navigation">
      <Layout styles={style.container}>
        <Button3D
          title="light top"
          onClick={() => setTopLight()}
          isOverview={steps.isOverview}
        />
        <Button3D
          title="light side"
          onClick={() => setSideLight()}
          isOverview={steps.isOverview}
        />
        <Button3D
          title="light front"
          onClick={() => setFrontLight()}
          isOverview={steps.isOverview}
        />

        <CSSTransition
          in={lights.allIsTurnOn || steps.isOverview}
          nodeRef={buttonRef}
          timeout={2000}
          classNames="fade"
          unmountOnExit>
          <div ref={buttonRef}>
            <StartStopEngine
              handleStartEngine={handleStartEngine}
              isOverview={steps.isOverview}
            />
          </div>
        </CSSTransition>
      </Layout>
    </div>
  )
}

export default CarNavigation
