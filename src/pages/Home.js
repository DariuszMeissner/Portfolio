/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  MeshReflectorMaterial,
  Html
} from '@react-three/drei'
import EngineOn from '../assets/audio/lamboEngineOn.mp3'
import EngineOff from '../assets/audio/lamboEngineOff.mp3'
import {
  Intro,
  IntroContent,
  Overlay,
  Lamborghini,
  SceneLights,
  EffectsColor,
  CarNavigation,
  Logo,
  NavigationWrap,
  TechStackList,
  Gallery3D
} from '../features'
import { PageContainer } from '../components'
import { About, Works } from '.'
import SceneContext from '../context/SceneContext'
import { useSizeScreen } from '../hooks'

const initialState = {
  emmisiveValue: 0,
  maxEmissiveCarLight: 4,
  maxEmissiveSceneLight: 0.3,
  sceneBg: 'black',
  surfaceColor: '#212121',
  delayEngineSound: 600,
  delayCarLightsOn: 1000
}

const audioClips = {
  engine: {
    on: new Audio(EngineOn),
    off: new Audio(EngineOff)
  }
}

const Home = () => {
  const [carLightEmissive, setCarLightEmissive] = useState(
    initialState.emmisiveValue
  )
  const { scene, action } = useContext(SceneContext)
  const [isEngineOn, setIsEngineOn] = useState(false)
  const [audio] = useState(audioClips)
  const screen = useSizeScreen()

  const intervalRef = useRef(null)
  const aboutPageRef = useRef(null)
  const worksPageRef = useRef(null)

  // state of animation camera
  const [active] = useState(false)
  const [zoom] = useState(true)

  const showGalleryTechStack =
    scene.steps.isOverview && scene.isAllLightsOn && scene.isStartEngine

  function turnOnEngineSound() {
    if (!isEngineOn) {
      setTimeout(() => {
        audio.engine.on.play()
      }, initialState.delayEngineSound)

      setIsEngineOn(true)
    }
  }

  function turnOffEngineSound() {
    if (isEngineOn) {
      audio.engine.on.currentTime = 0
      audio.engine.on.pause()
      setIsEngineOn(false)

      audio.engine.off.play()
    }
  }

  function increaseCarLightsEmissive() {
    if (carLightEmissive === 0) {
      const interval = setInterval(() => {
        setCarLightEmissive((prev) => prev + 1)
      }, 50)
      intervalRef.current = interval
    }
  }

  function stopEngine() {
    action.setIsStartEngine(false)
    setCarLightEmissive(0)
    turnOffEngineSound()
  }

  function startEngine() {
    setTimeout(() => {
      action.setIsStartEngine(true)
    }, initialState.delayCarLightsOn)

    increaseCarLightsEmissive()
    turnOnEngineSound()
  }

  function startStopEngine() {
    if (scene.isStartEngine) {
      stopEngine()
    } else {
      startEngine()
    }
  }

  function stopIncreaseCarLight() {
    if (
      carLightEmissive > initialState.maxEmissiveCarLight &&
      !scene.isStartEngine
    ) {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    stopIncreaseCarLight()
  }, [carLightEmissive, scene.isStartEngine])

  const handleStartEngine = () => {
    startStopEngine()
  }

  const homeStyle = {
    overflow: 'hidden',
    position: 'relative',
    height: '100%'
  }

  return (
    <div className="Home" style={homeStyle}>
      {scene.steps.isIntro && (
        <Intro>
          <IntroContent />
        </Intro>
      )}

      <Overlay
        styles={{ top: '0px', height: scene.steps.isSetup ? '30%' : '10%' }}>
        {scene.steps.isOverview ? <Logo /> : null}

        {scene.steps.isSetup && !scene.steps.isOverview ? (
          <CarNavigation
            handleStartEngine={handleStartEngine}
            action={{
              switchLightTop: action.switchLightTop,
              switchLightSide: action.switchLightSide,
              switchLightFront: action.switchLightFront
            }}
            scene={{
              isAllLightsOn: scene.isAllLightsOn,
              isOverview: scene.steps.isOverview
            }}
          />
        ) : null}
      </Overlay>

      <Canvas
        flat
        gl={{
          logarithmicDepthBuffer: true,
          antialias: false,
          toneMapping: false
        }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 15], fov: 25 }}>
        <Suspense fallback={null}>
          <Lamborghini
            rotation={[0, 0, 0]}
            scale={0.015}
            active={active}
            zoom={zoom}
            lightEmmit={carLightEmissive}
            lightsOn={scene.isStartEngine}
            handleCarHover={action.setIsCarHover}
            isCarHover={scene.isCarHover}
          />

          {/* car's platform */}
          <mesh position={[0, -1.82, 0]}>
            <cylinderGeometry args={[4.5, 4.5, 0.3, 64]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={15}
              depthScale={1}
              minDepthThreshold={0.85}
              color="red"
              metalness={0.6}
              roughness={1}
            />

            {/* {scene.steps.isOverview && (
              <Html
                zIndexRange={2}
                transform
                position={[4.6, -1.2, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.35}>
                <div>
                  <p style={{ color: 'white' }}>test</p>
                  <CarNavigation
                    handleStartEngine={handleStartEngine}
                    action={{
                      switchLightTop: action.switchLightTop,
                      switchLightSide: action.switchLightSide,
                      switchLightFront: action.switchLightFront
                    }}
                    scene={{
                      isAllLightsOn: scene.isAllLightsOn,
                      isOverview: scene.steps.isOverview
                    }}
                  />
                </div>
              </Html>
            )} */}
          </mesh>

          {scene.steps.isOverview ? (
            <ambientLight intensity={0.45} position={[3, 0, 0]} />
          ) : null}

          <ContactShadows
            resolution={768}
            frames={1}
            position={[0, -1.66, 0]}
            scale={15}
            blur={0.7}
            opacity={1}
            far={20}
          />

          {scene.steps.isSetup && (
            <Environment resolution={512}>
              <SceneLights scene={scene} />
            </Environment>
          )}

          {showGalleryTechStack ? (
            <>
              <Gallery3D
                setIsZoomGallery={action.setIsZoomGallery}
                worksData={scene.works.data}
                setIsModalOpen={action.setIsModalOpen}
                setDataProject={action.setDataProject}
                setIsWorksPage={action.setIsWorksPage}
                isZoomGallery={scene.isZoomGallery}
              />
              <TechStackList />
            </>
          ) : null}

          <OrbitControls
            enabled={scene.steps.isOverview && !scene.isZoomGallery}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.105}
            maxPolarAngle={Math.PI / 2.105}
          />

          <EffectsColor />
        </Suspense>
      </Canvas>

      <Overlay styles={{ bottom: '0px', height: '15%' }}>
        {scene.steps.isOverview ? <NavigationWrap /> : null}
      </Overlay>

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

      <audio>
        <source src={EngineOn} type="audio/mpeg" />
        <track src="" kind="captions" srcLang="en" label="captions" />
      </audio>
    </div>
  )
}

export default Home
