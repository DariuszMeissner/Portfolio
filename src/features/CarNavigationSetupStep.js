import React, { useRef, useEffect, useContext, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Layout } from '../components'
import { LightsButtons, StartStopEngine } from './index'
import { DataContext } from '../context/DataContext'
import { SceneLightsContext } from '../context/SceneLightsContext'
import { SceneCarContext } from '../context/SceneCarContext'
import SETTINGS from '../utils/settings'

const style = {
  container: {
    position: 'absolute',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    zIndex: '3'
  },
  button: {
    marginLeft: 40
  }
}

const CarNavigation = () => {
  const { steps, openStepOverview } = useContext(DataContext)
  const { lights, setTopLight, setFrontLight, setSideLight } =
    useContext(SceneLightsContext)
  const { carState, carActions } = useContext(SceneCarContext)

  const buttonRef = useRef(null)

  const handleStartEngine = () => {
    carActions.startStopEngine()
  }

  const delayInStepOverview = useCallback(() => {
    setTimeout(() => {
      openStepOverview()
    }, SETTINGS.animations.inTime.overviewStep)
  }, [openStepOverview])

  const goToStepOverview = useCallback(() => {
    if (carState.isEngineOn) {
      delayInStepOverview()
    }
  }, [carState.isEngineOn, delayInStepOverview])

  useEffect(() => {
    goToStepOverview()
  }, [carState.isEngineOn, goToStepOverview, openStepOverview])

  return (
    <div className="car-navigation">
      <Layout styles={style.container}>
        <LightsButtons
          isOverview={steps.isOverview}
          actions={{ setTopLight, setSideLight, setFrontLight }}
        />
        <CSSTransition
          in={lights.allIsTurnOn || steps.isOverview}
          nodeRef={buttonRef}
          timeout={2000}
          classNames="fade"
          unmountOnExit>
          <div ref={buttonRef} style={style.button}>
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
