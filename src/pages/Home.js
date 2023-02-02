import React, { useContext } from 'react'
import {
  Intro,
  IntroContent,
  Overlay,
  CarNavigation,
  Logo,
  NavigationWrap,
  CanvasContainer
} from '../features'
import PagesWrap from '../features/pages/PagesWrap'
import { DataContext } from '../context/DataContext'

const style = {
  container: {
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  },
  overlay: {
    top: '0px'
  }
}

const Home = () => {
  const { steps, pages, closeStepIntro, openStepSetup } =
    useContext(DataContext)

  const overlayAnimations = {
    height: !steps.isOverview ? '30%' : '10%'
  }

  return (
    <div className="Home" style={style.container}>
      {steps.isIntro && (
        <Intro>
          <IntroContent
            closeStepIntro={closeStepIntro}
            openStepSetup={openStepSetup}
          />
        </Intro>
      )}

      <Overlay styles={{ ...style.overlay, ...overlayAnimations }}>
        {steps.isOverview ? <Logo pages={pages} /> : null}

        {steps.isSetup && !steps.isOverview ? <CarNavigation /> : null}
      </Overlay>

      <CanvasContainer />

      {steps.isOverview ? <NavigationWrap /> : null}

      <PagesWrap />
    </div>
  )
}

export default Home
