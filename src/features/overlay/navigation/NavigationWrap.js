import React, { useContext, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useTimeout } from '../../../hooks'
import { Navigation } from '../..'
import SceneContext from '../../../context/SceneContext'

const NavigationWrap = () => {
  const [inNavigation, setInNavigation] = useState(false)
  const { action } = useContext(SceneContext)

  const navigationRef = useRef(null)

  useTimeout(() => {
    setInNavigation(true)
  }, 1500)

  return (
    <CSSTransition
      in={inNavigation}
      nodeRef={navigationRef}
      timeout={500}
      classNames="slide-up"
      style={{ position: 'absolute', bottom: 0, zIndex: 5 }}
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
  )
}

export default NavigationWrap
