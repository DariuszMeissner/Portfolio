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
import SceneContext from '../context/SceneContext'
import PagesWrap from '../features/pages/PagesWrap'

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
  const { scene } = useContext(SceneContext)

  const overlayAnimations = {
    height: !scene.steps.isOverview ? '30%' : '10%'
  }

  return (
    <div className="Home" style={style.container}>
      {scene.steps.isIntro && (
        <Intro>
          <IntroContent />
        </Intro>
      )}

      <Overlay styles={{ ...style.overlay, ...overlayAnimations }}>
        {scene.steps.isOverview ? <Logo /> : null}

        {scene.steps.isSetup && !scene.steps.isOverview ? (
          <CarNavigation />
        ) : null}
      </Overlay>

      <CanvasContainer />

      {scene.steps.isOverview ? <NavigationWrap /> : null}

      <PagesWrap />
    </div>
  )
}

export default Home
