/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  // OrbitControls,
  Environment
} from '@react-three/drei'
import EngineSound from '../assets/lambo-engine-sound-MP3.mp3'
import {
  Intro,
  IntroContent,
  Overlay,
  Lamborghini,
  SceneLights,
  EffectsColor,
  CarNavigation,
  Logo,
  Navigation
} from '../features'

import SceneContext from '../context/SceneContext'

const initialState = {
  emmisiveValue: {
    front: 0,
    back: 0
  },
  maxEmissiveCarLight: 4,
  maxEmissiveSceneLight: 0.3,
  sceneBg: 'black',
  surfaceColor: '#212121',
  delayEngineSound: 600,
  delayLightsOn: 1000
}

const Home = () => {
  // eslint-disable-next-line no-undef
  const audio = new Audio(EngineSound)

  const [carLightEmissive, setCarLightEmissive] = useState({
    front: initialState.emmisiveValue.front,
    back: initialState.emmisiveValue.back
  })
  const [isStartEngine, setIsStartEngine] = useState(false)
  const { scene, action } = useContext(SceneContext)

  const intervalRef = useRef()

  // state of animation camera
  const [active] = useState(false)
  const [zoom] = useState(true)

  useEffect(() => {
    if (
      carLightEmissive.front > initialState.maxEmissiveCarLight &&
      !isStartEngine
    ) {
      clearInterval(intervalRef.current)
      turnOnEngineSound()
      startEngine()
    }
  }, [carLightEmissive.front, isStartEngine])

  function hideIntro() {
    action.seIsIntro(false)
  }

  function turnOnEngineSound() {
    setTimeout(() => {
      audio.play()
    }, initialState.delayEngineSound)
  }

  function startEngine() {
    setTimeout(() => {
      setIsStartEngine(true)
    }, initialState.delayLightsOn)
  }

  function increaseCarLightsEmissive() {
    if (carLightEmissive.front === 0) {
      const interval = setInterval(() => {
        setCarLightEmissive((prev) => ({
          front: prev.front + 1,
          back: prev.back + 1
        }))
      }, 50)
      intervalRef.current = interval
    }
  }

  const handleStartEngine = () => {
    increaseCarLightsEmissive()
    hideIntro()
  }

  const homeStyle = {
    position: 'relative',
    height: '100%'
    // background: isStartEngine
    //   ? 'radial-gradient(circle,rgba(38,102,177,1) 32%, rgba(19,72,135,1) 100%)'
    //   : 'black'
  }

  return (
    <div className="Home" style={homeStyle}>
      {scene.steps.isIntro && (
        <Intro>
          <IntroContent />
        </Intro>
      )}

      {scene.steps.isSetup ? (
        <Overlay>
          <CarNavigation handleStartEngine={handleStartEngine} />
        </Overlay>
      ) : null}

      {scene.steps.isOverview ? (
        <Overlay>
          <Logo />
          <Navigation />
        </Overlay>
      ) : null}

      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 15], fov: 25 }}>
        <Suspense fallback={null}>
          <Lamborghini
            lightFrontEmmit={carLightEmissive.front}
            lightBackEmmit={carLightEmissive.back}
            rotation={[0, 0, 0]}
            scale={0.015}
            active={active}
            zoom={zoom}
            lightsOn={isStartEngine}
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
    </div>
  )
}

export default Home
