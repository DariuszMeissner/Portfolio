import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { func } from 'prop-types'
import { useTimeout } from '../../hooks'
import { Button } from '../../components'

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
    },
    SKIP_INTRO: {
      START: 3000
    }
  },
  ANIMATION: 2000
}

const IntroContent = ({ closeStepIntro, openStepSetup }) => {
  const welcomeTextFirstRef = useRef(null)
  const welcomeTextSecondRef = useRef(null)
  const welcomeTextThirdRef = useRef(null)
  const skipIntroRef = useRef(null)

  const [inTextFirst, setInTextFirst] = useState(false)
  const [inTextSecond, setInTextSecond] = useState(false)
  const [inTextThird, setInTextThird] = useState(false)
  const [inSkipIntro, setInSkipIntro] = useState(false)

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

  useTimeout(() => {
    setInSkipIntro(true)
  }, DURATION.TEXT.SKIP_INTRO.START)

  function hideIntro() {
    closeStepIntro()
  }

  function showSceneSetup() {
    openStepSetup()
  }

  function skipIntro() {
    hideIntro()
    showSceneSetup()
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
          <p>{`Everyone from us dreaming\nabout something big`}</p>
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
          <p>{`but sometimes we only got\nsubstitute`}</p>
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
          <p>{`please,\nturn on all lights...`}</p>
        </div>
      </CSSTransition>

      {inSkipIntro && (
        <div
          ref={skipIntroRef}
          style={{ position: 'absolute', bottom: '-50%', right: '20%' }}>
          <Button
            title="Skip Intro"
            onClick={() => skipIntro()}
            styles={{
              color: 'white',
              padding: '10px',
              border: '1px solid white'
            }}
          />
        </div>
      )}
    </>
  )
}

IntroContent.propTypes = {
  closeStepIntro: func.isRequired,
  openStepSetup: func.isRequired
}

export default IntroContent
