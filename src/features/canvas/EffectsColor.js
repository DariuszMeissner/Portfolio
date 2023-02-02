/* eslint-disable no-unused-vars */
import React from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const EffectsColor = () => {
  return (
    <EffectComposer disableNormalPass>
      <Bloom mipmapBlur intensity={2} />
    </EffectComposer>
  )
}

export default EffectsColor
