import React, { useContext, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSizeScreen, useTimeout } from '../../../hooks'
import { Navigation, Overlay } from '../..'
import { DataContext } from '../../../context/DataContext'

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
  const { openPageWorks, openPageAbout } = useContext(DataContext)
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
            openAboutPage={() => openPageAbout()}
            openWorksPage={() => openPageWorks()}
          />
        </div>
      </CSSTransition>
    </Overlay>
  )
}

export default NavigationWrap
