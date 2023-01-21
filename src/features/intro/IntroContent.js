import React, { useContext, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import SceneContext from '../../context/SceneContext'
import { useTimeout } from '../../hooks'

const DURATION = {
  TEXT: {
    FIRST: {
      START: 1000,
      END: 4000
    },
    SECOND: {
      START: 6000,
      END: 9000
    },
    THIRD: {
      START: 11000,
      END: 14000
    }
  },
  ANIMATION: 2000
}

const IntroContent = () => {
  const welcomeTextFirstRef = useRef(null)
  const welcomeTextSecondRef = useRef(null)
  const welcomeTextThirdRef = useRef(null)

  const { action } = useContext(SceneContext)
  const [inTextFirst, setInTextFirst] = useState(false)
  const [inTextSecond, setInTextSecond] = useState(false)
  const [inTextThird, setInTextThird] = useState(false)

  useTimeout(() => {
    setInTextFirst(true)
  }, DURATION.TEXT.FIRST.START)

  useTimeout(() => {
    setInTextFirst(false)
  }, DURATION.TEXT.FIRST.END)

  useTimeout(() => {
    setInTextSecond(true)
  }, DURATION.TEXT.SECOND.START)

  useTimeout(() => {
    setInTextSecond(false)
  }, DURATION.TEXT.SECOND.END)

  useTimeout(() => {
    setInTextThird(true)
  }, DURATION.TEXT.THIRD.START)

  useTimeout(() => {
    setInTextThird(false)

    // eslint-disable-next-line no-use-before-define
    hideIntro()
    // eslint-disable-next-line no-use-before-define
    showSceneSetup()
  }, DURATION.TEXT.THIRD.END)

  function hideIntro() {
    action.setIsIntro(false)
  }

  function showSceneSetup() {
    action.setIsSetup(true)
  }

  return (
    <>
      <CSSTransition
        in={inTextFirst}
        nodeRef={welcomeTextFirstRef}
        timeout={DURATION.ANIMATION}
        classNames="fade"
        unmountOnExit
        onEnter={() => setInTextFirst(true)}
        onExited={() => setInTextFirst(false)}>
        <div ref={welcomeTextFirstRef} style={{ padding: '0 20px' }}>
          <p>Everyone from us dreaming about something big</p>
        </div>
      </CSSTransition>

      <CSSTransition
        in={inTextSecond}
        nodeRef={welcomeTextSecondRef}
        timeout={DURATION.ANIMATION}
        classNames="fade"
        unmountOnExit
        onEnter={() => setInTextSecond(true)}
        onExited={() => setInTextSecond(false)}>
        <div ref={welcomeTextSecondRef} style={{ padding: '0 20px' }}>
          <p>but sometimes we only got substitute</p>
        </div>
      </CSSTransition>

      <CSSTransition
        in={inTextThird}
        nodeRef={welcomeTextThirdRef}
        timeout={DURATION.ANIMATION}
        classNames="fade"
        unmountOnExit
        onEnter={() => setInTextThird(true)}
        onExited={() => setInTextThird(false)}>
        <div ref={welcomeTextThirdRef} style={{ padding: '0 20px' }}>
          <p>please, turn on all lights...</p>
        </div>
      </CSSTransition>
    </>
  )
}

export default IntroContent
