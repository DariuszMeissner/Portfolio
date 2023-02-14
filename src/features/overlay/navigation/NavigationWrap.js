import React, { useContext, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSizeScreen, useTimeout } from '../../../hooks'
import { Navigation, Overlay, StartStopEngine, AudioOnOff } from '../..'
import { DataContext } from '../../../context/DataContext'
import { SceneCarContext } from '../../../context/SceneCarContext'

const style = {
  overlay: {
    bottom: '0px'
  },
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 5,
    textAlign: 'center'
  },
  buttonStartStop: {
    marginBottom: 20
  }
}

const NavigationWrap = () => {
  const { steps, openPageWorks, openPageAbout } = useContext(DataContext)
  const { carState, carActions } = useContext(SceneCarContext)
  const [inNavigation, setInNavigation] = useState(false)
  const navigationRef = useRef(null)
  const screen = useSizeScreen()

  const styleButtonStartStopScreen = {
    transform: screen.isXS ? 'scale(0.8)' : 'scale(1)'
  }

  useTimeout(() => {
    setInNavigation(true)
  }, 1500)

  return (
    <Overlay styles={{ ...style.overlay }}>
      <CSSTransition
        in={inNavigation}
        nodeRef={navigationRef}
        timeout={500}
        classNames="slide-up"
        style={style.container}
        unmountOnExit
        onEnter={() => setInNavigation(true)}
        onExited={() => setInNavigation(false)}>
        <div ref={navigationRef}>
          {!carState.isZoomGallery && (
            <div
              style={{
                ...style.buttonStartStop,
                ...styleButtonStartStopScreen
              }}>
              <StartStopEngine
                handleStartEngine={carActions.startStopEngine}
                isOverview={steps.isOverview}
              />
            </div>
          )}

          <Navigation
            openAboutPage={() => openPageAbout()}
            openWorksPage={() => openPageWorks()}
          />
        </div>
      </CSSTransition>

      <AudioOnOff
        isMuted={carState.isMuted}
        setMuteAudio={carActions.setMuteAudio}
      />
    </Overlay>
  )
}

export default NavigationWrap
