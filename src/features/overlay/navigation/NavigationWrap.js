import React, { useContext, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSizeScreen, useTimeout } from '../../../hooks'
import { Navigation, Overlay } from '../..'
import SceneContext from '../../../context/SceneContext'

const style = {
  overlay: {
    bottom: '0px'
  },
  button: {
    position: 'absolute',
    bottom: 0,
    zIndex: 5
  }
}

const NavigationWrap = () => {
  const [inNavigation, setInNavigation] = useState(false)
  const { action } = useContext(SceneContext)
  const screen = useSizeScreen()
  const navigationRef = useRef(null)

  const styleAnimations = {
    height: screen.isXS ? '15%' : '10%'
  }

  useTimeout(() => {
    setInNavigation(true)
  }, 1500)

  return (
    <Overlay styles={{ ...style.overlay, ...styleAnimations }}>
      <CSSTransition
        in={inNavigation}
        nodeRef={navigationRef}
        timeout={500}
        classNames="slide-up"
        style={style.button}
        unmountOnExit
        onEnter={() => setInNavigation(true)}
        onExited={() => setInNavigation(false)}>
        <div ref={navigationRef}>
          <Navigation
            openAboutPage={() => action.setIsAboutPage(true)}
            openWorksPage={() => action.setIsWorksPage(true)}
          />
        </div>
      </CSSTransition>
    </Overlay>
  )
}

export default NavigationWrap
