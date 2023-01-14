import React, { useContext, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { PageContainer } from '../../../components'
import { About, Works } from '../../../pages'
import { useTimeout } from '../../../hooks'
import { Navigation } from '../..'
import SceneContext from '../../../context/SceneContext'

const NavigationWrap = () => {
  const [inNavigation, setInNavigation] = useState(false)
  const [isAboutPage, setIsAboutPage] = useState(false)
  const [isWorksPage, setIsWorksPage] = useState(false)
  const { action } = useContext(SceneContext)

  const navigationRef = useRef(null)
  const aboutPageRef = useRef(null)
  const worksPageRef = useRef(null)

  function openPage(statePage) {
    statePage(true)

    if (statePage === setIsAboutPage) {
      action.setIsAboutPage(true)
    }

    if (statePage === setIsWorksPage) {
      action.setIsWorksPage(true)
    }
  }

  function closePage(statePage) {
    statePage(false)

    if (statePage === setIsAboutPage) {
      action.setIsAboutPage(false)
    }

    if (statePage === setIsWorksPage) {
      action.setIsWorksPage(false)
    }
  }

  useTimeout(() => {
    setInNavigation(true)
  }, 1500)

  return (
    <>
      <CSSTransition
        in={inNavigation}
        nodeRef={navigationRef}
        timeout={500}
        classNames="slide-up"
        style={{ position: 'absolute', bottom: 0 }}
        unmountOnExit
        onEnter={() => setInNavigation(true)}
        onExited={() => setInNavigation(false)}>
        <div ref={navigationRef}>
          <Navigation
            openAboutPage={() => openPage(setIsAboutPage)}
            openWorksPage={() => openPage(setIsWorksPage)}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isAboutPage}
        nodeRef={aboutPageRef}
        timeout={500}
        classNames="slide-page-up"
        unmountOnExit
        onEnter={() => setIsAboutPage(true)}
        onExited={() => setIsAboutPage(false)}>
        <div ref={aboutPageRef}>
          <PageContainer>
            <About closePage={() => closePage(setIsAboutPage)} />
          </PageContainer>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isWorksPage}
        nodeRef={worksPageRef}
        timeout={500}
        classNames="slide-page-up"
        unmountOnExit
        onEnter={() => setIsWorksPage(true)}
        onExited={() => setIsWorksPage(false)}>
        <div ref={worksPageRef}>
          <PageContainer>
            <Works closePage={() => closePage(setIsWorksPage)} />
          </PageContainer>
        </div>
      </CSSTransition>
    </>
  )
}

export default NavigationWrap
