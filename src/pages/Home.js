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

const homeStyle = {
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
}

const Home = () => {
  const { scene } = useContext(SceneContext)

  return (
    <div className="Home" style={homeStyle}>
      {scene.steps.isIntro && (
        <Intro>
          <IntroContent />
        </Intro>
      )}

      <Overlay
        styles={{
          top: '0px',
          height: !scene.steps.isOverview ? '30%' : '10%'
        }}>
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
