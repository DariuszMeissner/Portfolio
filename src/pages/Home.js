/* eslint-disable jsx-a11y/media-has-caption */
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  // OrbitControls,
  Environment
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
  NavigationWrap
} from '../features'
import SceneContext from '../context/SceneContext'

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

  const intervalRef = useRef()

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
    position: 'relative',
    height: '100%',
    background: scene.isStartEngine
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

      <Overlay>
        {scene.steps.isOverview ? (
          <>
            <Logo />
            <NavigationWrap />
          </>
        ) : null}

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
            lightEmmit={carLightEmissive}
            rotation={[0, 0, 0]}
            scale={0.015}
            active={active}
            zoom={zoom}
            lightsOn={scene.isStartEngine}
          />
          <ContactShadows
            resolution={768}
            frames={1}
            position={[0, -1.16, 0]}
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
          <EffectsColor />

          {/* <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          /> */}
        </Suspense>
      </Canvas>

      <audio>
        <source src={EngineOn} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Home
