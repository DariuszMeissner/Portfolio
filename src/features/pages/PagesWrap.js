import React, { useContext, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { PageContainer } from '../../components'
import { DataContext } from '../../context/DataContext'
import { About, Works } from '../../pages'

const PagesWrap = () => {
  const {
    pages,
    openPageWorks,
    openPageAbout,
    closePageWorks,
    closePageAbout
  } = useContext(DataContext)
  const aboutPageRef = useRef(null)
  const worksPageRef = useRef(null)

  return (
    <div className="pages-wrap">
      <CSSTransition
        in={pages.isAbout}
        nodeRef={aboutPageRef}
        timeout={500}
        classNames="slide-page-up"
        unmountOnExit
        onEnter={() => openPageAbout()}
        onExited={() => closePageAbout()}>
        <div ref={aboutPageRef}>
          <PageContainer>
            <About
              closePage={() => closePageAbout()}
              openWorksPage={() => openPageWorks()}
            />
          </PageContainer>
        </div>
      </CSSTransition>
      <CSSTransition
        in={pages.isWorks}
        nodeRef={worksPageRef}
        timeout={500}
        classNames="slide-page-up"
        unmountOnExit
        onEnter={() => openPageWorks()}
        onExited={() => closePageWorks()}>
        <div ref={worksPageRef}>
          <PageContainer>
            <Works closePage={() => closePageWorks()} />
          </PageContainer>
        </div>
      </CSSTransition>
    </div>
  )
}

export default PagesWrap
