/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  // OrbitControls,
  Lightformer,
  Environment
} from '@react-three/drei'
import EffectsColor from './features/EffectsColor'
import Lamborghini from './features/Lamborghini'
import EngineSound from './assets/lambo-engine-sound-MP3.mp3'
import WelcomeText from './features/welcome-text/WelcomeText'
import StartEngine from './features/StartEngine'
import './app.scss'

const App = () => {
  // eslint-disable-next-line no-undef
  const audio = new Audio(EngineSound)

  const [emissiveValue, setEmissiveValue] = useState({ front: 0, back: 0 })
  const [lightsOn, setLightsOn] = useState(false)
  // const [orbitOn] = useState(false)
  const intervalRef = useRef()

  useEffect(() => {
    if (emissiveValue.front > 4) {
      clearInterval(intervalRef.current)

      setTimeout(() => {
        audio.play()
      }, 600)

      setTimeout(() => {
        setLightsOn(true)
      }, 1100)

      // setTimeout(() => {
      //   setOrbitOn(true)
      // }, 4000)
    }
  }, [emissiveValue.front])

  const handleTurnOnLight = () => {
    if (emissiveValue.front === 0) {
      const interval = setInterval(() => {
        setEmissiveValue((prev) => ({
          front: prev.front + 1,
          back: prev.back + 1
        }))
      }, 50)
      intervalRef.current = interval
    }
  }

  return (
    <div className="app">
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 15], fov: 25 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['black']} />

          <Lamborghini
            lightFrontEmmit={emissiveValue.front}
            lightBackEmmit={emissiveValue.back}
            rotation={[0, 0, 0]}
            scale={0.015}
          />

          <ContactShadows
            resolution={1024}
            frames={1}
            position={[0, -1.16, 0]}
            scale={15}
            blur={0.7}
            opacity={1}
            far={20}
          />

          {/* <hemisphereLight intensity={2} /> */}
          {lightsOn && (
            <Environment resolution={512}>
              <Lightformer
                intensity={0.5}
                rotation-x={Math.PI / 2}
                position={[1, 1, 0]}
                scale={[20, 20, 30]}
              />
            </Environment>
          )}
          <EffectsColor />

          {/* {orbitOn && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />
          )} */}
        </Suspense>
      </Canvas>

      {/* intro */}
      <WelcomeText />
      <StartEngine handleTurnOnLight={handleTurnOnLight} />
    </div>
  )
}

export default App
