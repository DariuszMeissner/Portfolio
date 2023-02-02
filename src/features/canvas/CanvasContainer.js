/* eslint-disable react/no-unknown-property */
import React, {
  Suspense,
  useContext,
  useState,
  useCallback,
  useEffect
} from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  MeshReflectorMaterial,
  Html
} from '@react-three/drei'
import {
  Lamborghini,
  SceneLights,
  EffectsColor,
  // CarNavigation,
  TechStackList,
  Gallery3D,
  AudioOnOff
} from '..'
import { WorksContext } from '../../context/WorksContext'
import { audio } from '../../App'
import { useSizeScreen } from '../../hooks'
import { CurrentProjectContext } from '../../context/CurrentProjectContext'
import { DataContext } from '../../context/DataContext'
import { SceneLightsContext } from '../../context/SceneLightsContext'
import { SceneCarContext } from '../../context/SceneCarContext'

const CanvasContainer = () => {
  const works = useContext(WorksContext)
  const { saveCurrentProject } = useContext(CurrentProjectContext)
  const { steps, openModal, openPageWorks } = useContext(DataContext)
  const { lights } = useContext(SceneLightsContext)
  const { carState, carActions } = useContext(SceneCarContext)

  const [isMuted, setIsMuted] = useState(false)
  const [zoom] = useState(true)
  const [isOcclude, setIsOcclude] = useState(false)
  const screen = useSizeScreen()

  const showGalleryTechStack =
    steps.isOverview && lights.allIsTurnOn && carState.isEngineOn

  const muteAudio = useCallback(() => {
    if (isMuted) {
      audio.engine.on.muted = true
      audio.engine.off.muted = true
    } else {
      audio.engine.on.muted = false
      audio.engine.off.muted = false
    }
  }, [isMuted])

  useEffect(() => {
    muteAudio()
  }, [carState.isEngineOn, isMuted, muteAudio])

  return (
    <Canvas
      style={{ position: 'relative' }}
      flat
      gl={{
        logarithmicDepthBuffer: true,
        antialias: false
      }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 20], fov: 25 }}>
      <Suspense fallback={null}>
        {/* car gltf */}
        <Lamborghini
          rotation={[0, 0, 0]}
          scale={0.015}
          zoom={zoom}
          lightEmmit={carState.lightEmissive}
          lightsOn={carState.isEngineOn}
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

          {steps.isOverview && (
            <Html
              occlude
              onOcclude={setIsOcclude}
              transform
              zIndexRange={1}
              position={[4.6, screen.isXS ? -1.7 : -1.2, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={screen.isXS ? 0.5 : 0.35}>
              <div
                style={{
                  opacity: isOcclude ? 0 : 1,
                  transition: 'opacity 300ms ease'
                }}>
                {/* <CarNavigation /> */}
              </div>
            </Html>
          )}
        </mesh>

        {steps.isOverview && (
          <AudioOnOff isMuted={isMuted} handleMute={setIsMuted} />
        )}

        {steps.isOverview && lights.allIsTurnOn ? (
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

        {steps.isSetup && (
          <Environment resolution={512}>
            <SceneLights lights={lights} />
          </Environment>
        )}

        {showGalleryTechStack ? (
          <>
            <Gallery3D
              works={works}
              setDataProject={saveCurrentProject}
              openModal={openModal}
              openPageWorks={openPageWorks}
              isZoomGallery={carState.isZoomGallery}
              setZoomGalleryOff={carActions.setZoomGalleryOff}
              setZoomGalleryOn={carActions.setZoomGalleryOn}
            />
            <TechStackList />
          </>
        ) : null}

        <OrbitControls
          enabled={steps.isOverview && !carState.isZoomGallery}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.105}
          maxPolarAngle={Math.PI / 2.105}
        />

        <EffectsColor />
      </Suspense>
    </Canvas>
  )
}

export default CanvasContainer
