import React, { useContext } from 'react'
import {
  Intro,
  IntroContent,
  Overlay,
  CarNavigationSetupStep,
  Logo,
  NavigationWrap,
  CanvasContainer,
  LightsButtonsOverviewStep
} from '../features'
import PagesWrap from '../features/pages/PagesWrap'
import { DataContext } from '../context/DataContext'
import { SceneLightsContext } from '../context/SceneLightsContext'
import { SceneCarContext } from '../context/SceneCarContext'

const style = {
  container: {
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  },
  overlay: {
    top: '0px',
    height: '22%'
  },
  lightsButtons: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const Home = () => {
  const { steps, pages, closeStepIntro, openStepSetup } =
    useContext(DataContext)
  const { setTopLight, setSideLight, setFrontLight } =
    useContext(SceneLightsContext)
  const { carState } = useContext(SceneCarContext)

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

      <Overlay styles={style.overlay}>
        {steps.isOverview ? (
          <>
            <Logo pages={pages} />

            {!carState.isZoomGallery && (
              <LightsButtonsOverviewStep
                isOverview={steps.isOverview}
                actions={{ setTopLight, setSideLight, setFrontLight }}
              />
            )}
          </>
        ) : null}

        {steps.isSetup && !steps.isOverview ? <CarNavigationSetupStep /> : null}
      </Overlay>

      <CanvasContainer />

      {steps.isOverview ? <NavigationWrap /> : null}

      <PagesWrap />
    </div>
  )
}

export default Home
