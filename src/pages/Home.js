/* eslint-disable react/no-unknown-property */
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Canvas, extend } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  MeshReflectorMaterial,
  Text3D
} from '@react-three/drei'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
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
  NavigationWrap
} from '../features'
import { PageContainer } from '../components'
import { About, Works } from '.'
import SceneContext from '../context/SceneContext'

extend({ TextGeometry })

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

  const intervalRef = useRef(null)
  const aboutPageRef = useRef(null)
  const worksPageRef = useRef(null)

  // state of animation camera
  const [active] = useState(false)
  const [zoom] = useState(true)

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
    height: '100%',
    background:
      scene.isStartEngine && scene.isAllLightsOn
        ? 'radial-gradient(circle,rgba(38,102,177,1) 32%, rgba(19,72,135,1) 100%)'
        : 'black'
  }

  return (
    <div className="Home" style={homeStyle}>
      {scene.steps.isIntro && (
        <Intro>
          <IntroContent />
        </Intro>
      )}

      <Overlay styles={{ top: '0px' }}>
        {scene.steps.isOverview ? <Logo /> : null}

        {scene.steps.isSetup ? (
          <CarNavigation handleStartEngine={handleStartEngine} />
        ) : null}
      </Overlay>

      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
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
          />

          {/* car's platform */}
          <mesh visible position={[0, -1.82, 0]}>
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
          </mesh>

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

          {scene.steps.isOverview && scene.isCarHover ? (
            <Text3D
              font="./fonts/Open Sans_Regular.json"
              scale={0.16}
              position={[4.5, -1.9, 0.5]}
              rotation={[0, 20.4, 0]}>
              SWIPE A CAR
              <meshNormalMaterial />
            </Text3D>
          ) : null}

          {scene.steps.isOverview && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          )}

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
            <About closePage={() => action.setIsAboutPage(false)} />
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
