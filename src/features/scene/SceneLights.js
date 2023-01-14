import React from 'react'
import { Lightformer } from '@react-three/drei'
import { sceneLightsType } from '../../types'

const SceneLights = ({ scene }) => {
  return (
    <>
      {scene.lightTop && (
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

      {scene.lightSide && (
        <>
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-50, 2, 0]}
            scale={[100, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[50, 2, 0]}
            scale={[100, 2, 1]}
          />
        </>
      )}

      {scene.lightFront && (
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 0, 15]}
          scale={[10, 1, 1]}
        />
      )}
    </>
  )
}

SceneLights.propTypes = {
  scene: sceneLightsType.isRequired
}

export default SceneLights
