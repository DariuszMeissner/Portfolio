import React from 'react'
import { Lightformer } from '@react-three/drei'
import { sceneLightsType } from '../../types'

const SceneLights = ({ lights }) => {
  return (
    <>
      {lights.top && (
        <>
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -9]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 9]}
            scale={[10, 1, 1]}
          />
        </>
      )}

      {lights.side && (
        <>
          <Lightformer
            intensity={1}
            rotation-y={-Math.PI / 2}
            position={[5, 0, 0]}
            scale={[30, 2, 1]}
          />
          <Lightformer
            intensity={1.2}
            rotation-y={-Math.PI / 2}
            position={[-5, 0, 0]}
            scale={[30, 2, 1]}
          />
        </>
      )}

      {lights.front && (
        <Lightformer
          intensity={1}
          rotation-y={0.3}
          position={[1, 0, 0]}
          scale={[20, 3, 1]}
        />
      )}
    </>
  )
}

SceneLights.propTypes = {
  lights: sceneLightsType.isRequired
}

export default SceneLights
