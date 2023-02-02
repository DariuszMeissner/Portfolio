import React, { useContext, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { PageContainer } from '../../components'
import { About, Works } from '../../pages'
import SceneContext from '../../context/SceneContext'

const PagesWrap = () => {
  const { scene, action } = useContext(SceneContext)
  const aboutPageRef = useRef(null)
  const worksPageRef = useRef(null)

  return (
    <div className="pages-wrap">
      <CSSTransition
        in={scene.pages.isAboutPage}
        nodeRef={aboutPageRef}
        timeout={500}
        classNames="slide-page-up"
        unmountOnExit
        onEnter={() => action.setIsAboutPage(true)}
        onExited={() => action.setIsAboutPage(false)}>
        <div ref={aboutPageRef}>
          <PageContainer>
            <About
              closePage={() => action.setIsAboutPage(false)}
              openWorksPage={() => action.setIsWorksPage(true)}
            />
          </PageContainer>
        </div>
      </CSSTransition>
      <CSSTransition
        in={scene.pages.isWorksPage}
        nodeRef={worksPageRef}
        timeout={500}
        classNames="slide-page-up"
        unmountOnExit
        onEnter={() => action.setIsWorksPage(true)}
        onExited={() => action.setIsWorksPage(false)}>
        <div ref={worksPageRef}>
          <PageContainer>
            <Works closePage={() => action.setIsWorksPage(false)} />
          </PageContainer>
        </div>
      </CSSTransition>
    </div>
  )
}

export default PagesWrap
