import React from 'react'
// import PropTypes from 'prop-types'
import { Lightformer } from '@react-three/drei'

const SceneLights = () => {
  return (
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
        position={[0, 4, -6]}
        scale={[10, 1, 1]}
      />

      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -3]}
        scale={[10, 1, 1]}
      />
    </>
  )
}

// SceneLights.propTypes = {
//   sceneLightEmissive: PropTypes.number
// }

export default SceneLights
