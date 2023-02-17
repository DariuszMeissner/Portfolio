/* eslint-disable react/no-unknown-property */
import React, { Suspense, useContext, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  MeshReflectorMaterial
} from '@react-three/drei'
import {
  Lamborghini,
  SceneLights,
  EffectsColor,
  TechStackList,
  Gallery3D
} from '..'
import { WorksContext } from '../../context/WorksContext'
import { CurrentProjectContext } from '../../context/CurrentProjectContext'
import { DataContext } from '../../context/DataContext'
import { SceneLightsContext } from '../../context/SceneLightsContext'
import { SceneCarContext } from '../../context/SceneCarContext'
import SETTINGS from '../../utils/settings'

const style = {
  canvas: { position: 'relative' }
}

const CanvasContainer = () => {
  const works = useContext(WorksContext)
  const { saveCurrentProject } = useContext(CurrentProjectContext)
  const { steps, openModal, openPageWorks } = useContext(DataContext)
  const { lights } = useContext(SceneLightsContext)
  const { carState, carActions } = useContext(SceneCarContext)

  const [zoom] = useState(true)

  const showGalleryTechStack =
    steps.isOverview && lights.allIsTurnOn && carState.isEngineOn

  return (
    <Canvas
      style={style.canvas}
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
          zoom={zoom}
          lightEmmit={carState.lightEmissive}
          isEngineOn={carState.isEngineOn}
          isOverview={steps.isOverview}
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
        </mesh>

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

        {steps.isSetup ? (
          <>
            <color attach="background" args={['#1E1E1E']} />

            <Environment resolution={512}>
              <SceneLights lights={lights} />
            </Environment>

            <EffectsColor />
          </>
        ) : null}

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
          minPolarAngle={SETTINGS.orbitControls.minPolarAngle}
          maxPolarAngle={SETTINGS.orbitControls.maxPolarAngle}
        />
      </Suspense>
    </Canvas>
  )
}

export default CanvasContainer
