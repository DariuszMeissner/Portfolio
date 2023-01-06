/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useRef, useState } from 'react'
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
  EffectsColor
} from '../features/index'

const initialState = {
  emmisiveValue: {
    front: 0,
    back: 0
  },
  maxEmissiveCarLight: 4,
  maxEmissiveSceneLight: 0.3,
  lightsOn: false,
  isIntro: true,
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
  const [sceneLightEmissive, setSceneLightEmissive] = useState(0)
  const [lightsOn, setLightsOn] = useState(initialState.lightsOn)
  const [isIntro, seIsIntro] = useState(initialState.isIntro)

  const intervalRef = useRef()
  const intervalRef2 = useRef()

  // state of animation camera
  const [active] = useState(false)
  const [zoom] = useState(true)

  useEffect(() => {
    if (
      carLightEmissive.front > initialState.maxEmissiveCarLight &&
      !lightsOn
    ) {
      clearInterval(intervalRef.current)
      turnOnEngineSound()
      turnOnSceneLights()
    }

    if (lightsOn && sceneLightEmissive === 0) {
      increaseSceneLightEmissive()
    } else if (sceneLightEmissive >= initialState.maxEmissiveSceneLight) {
      clearInterval(intervalRef2.current)
    }
  }, [carLightEmissive.front, lightsOn, sceneLightEmissive])

  function hideIntro() {
    seIsIntro(false)
  }

  function turnOnEngineSound() {
    setTimeout(() => {
      audio.play()
    }, initialState.delayEngineSound)
  }

  function turnOnSceneLights() {
    setTimeout(() => {
      setLightsOn(true)
    }, initialState.delayLightsOn)
  }

  function increaseSceneLightEmissive() {
    if (sceneLightEmissive === 0) {
      const interval = setInterval(() => {
        setSceneLightEmissive((prev) => prev + 0.03)
      }, 10)
      intervalRef2.current = interval
    }
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
    height: '100%',
    background: lightsOn
      ? 'radial-gradient(circle,rgba(38,102,177,1) 32%, rgba(19,72,135,1) 100%)'
      : 'black'
  }

  return (
    <div className="Home" style={homeStyle}>
      {isIntro && (
        <Intro>
          <IntroContent handleStartEngine={handleStartEngine} />
        </Intro>
      )}

      {lightsOn && <Overlay />}

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
            lightsOn={lightsOn}
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

          {lightsOn && (
            <Environment resolution={512}>
              <SceneLights sceneLightEmissive={sceneLightEmissive} />
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
