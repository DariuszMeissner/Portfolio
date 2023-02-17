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

const style = {
  introText: {
    padding: '0 20px'
  },
  skipIntro: {
    container: {
      position: 'absolute',
      bottom: '-50%',
      right: '20%'
    },
    button: {
      color: 'white',
      padding: '10px',
      border: '1px solid white'
    }
  }
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

    hideIntro()
    showSceneSetup()
  }, DURATION.TEXT.THIRD.END)

  useTimeout(() => {
    setInSkipIntro(true)
  }, DURATION.TEXT.SKIP_INTRO.START)

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
        <div ref={welcomeTextFirstRef} style={style.introText}>
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
        <div ref={welcomeTextSecondRef} style={style.introText}>
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
        <div ref={welcomeTextThirdRef} style={style.introText}>
          <p>{`please,\nturn on all lights...`}</p>
        </div>
      </CSSTransition>

      {inSkipIntro && (
        <div ref={skipIntroRef} style={style.skipIntro.container}>
          <Button
            title="Skip Intro"
            onClick={() => skipIntro()}
            styles={style.skipIntro.button}
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
