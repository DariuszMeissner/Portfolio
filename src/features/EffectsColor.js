/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoader } from '@react-three/fiber'
import { EffectComposer, Bloom, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'

const EffectsColor = () => {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube')

  return (
    <EffectComposer disableNormalPass>
      <Bloom mipmapBlur intensity={2} />
      {/* <LUT lut={texture} /> */}
    </EffectComposer>
  )
}

export default EffectsColor
