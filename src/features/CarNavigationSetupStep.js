import React, {
  useRef,
  useEffect,
  useContext,
  useCallback,
  useState
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { Layout } from '../components'
import { LightsButtons, StartStopEngine } from './index'
import { DataContext } from '../context/DataContext'
import { SceneLightsContext } from '../context/SceneLightsContext'
import { SceneCarContext } from '../context/SceneCarContext'
import SETTINGS from '../utils/settings'
import { useTimeout } from '../hooks'

const style = {
  container: {
    position: 'absolute',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    alignItems: 'center',
    zIndex: '3'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginLeft: 40
  },
  hint: {
    color: 'white',
    textAlign: 'center'
  }
}

const CarNavigation = () => {
  const { steps, openStepOverview } = useContext(DataContext)
  const { lights, setTopLight, setFrontLight, setSideLight } =
    useContext(SceneLightsContext)
  const { carState, carActions } = useContext(SceneCarContext)

  const [inCarNavigation, setInCarNavigation] = useState(false)

  const styleContainerAnimation = {
    opacity: inCarNavigation ? '1' : '0',
    transition: 'opacity 500ms ease-out'
  }

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

  useTimeout(() => {
    setInCarNavigation(true)
  }, SETTINGS.animations.inTime.carNavigationSetupStep)

  return (
    <div className="car-navigation">
      <Layout styles={{ ...style.container, ...styleContainerAnimation }}>
        <div style={style.buttons}>
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
        </div>

        <p style={style.hint}>
          {!lights.allIsTurnOn
            ? 'Turn on the lights to see next step'
            : 'now, Start the engine'}
        </p>
      </Layout>
    </div>
  )
}

export default CarNavigation
