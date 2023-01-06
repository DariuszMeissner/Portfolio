import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import { useTimeout } from '../../hooks'
import StartEngine from '../scene/StartEngine'
import './IntroContent.scss'

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
      END: 12000
    },
    BUTTON: {
      START: 14000
    }
  },
  ANIMATION: 2000
}

const IntroContent = ({ handleStartEngine }) => {
  const welcomeTextFirstRef = useRef(null)
  const welcomeTextSecondRef = useRef(null)
  const welcomeTextThirdRef = useRef(null)
  const buttonRef = useRef(null)
  const [inTextFirst, setInTextFirst] = useState(false)
  const [inTextSecond, setInTextSecond] = useState(false)
  const [inTextThird, setInTextThird] = useState(false)
  const [inButton, setInButton] = useState(false)

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
  }, DURATION.TEXT.THIRD.END)

  useTimeout(() => {
    setInButton(true)
  }, DURATION.TEXT.BUTTON.START)

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
        <div ref={welcomeTextFirstRef}>
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
        <div ref={welcomeTextSecondRef}>
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
        <div ref={welcomeTextThirdRef}>
          <p>so, please try...</p>
        </div>
      </CSSTransition>

      <CSSTransition
        in={inButton}
        nodeRef={buttonRef}
        timeout={DURATION.ANIMATION}
        classNames="fade"
        unmountOnExit
        onEnter={() => setInButton(true)}
        onExited={() => setInButton(false)}>
        <div ref={buttonRef}>
          <StartEngine handleStartEngine={handleStartEngine} />
        </div>
      </CSSTransition>
    </>
  )
}

IntroContent.propTypes = {
  handleStartEngine: PropTypes.func.isRequired
}

export default IntroContent
