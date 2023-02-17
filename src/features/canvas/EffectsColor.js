import React from 'react'
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette
} from '@react-three/postprocessing'

const EffectsColor = () => {
  return (
    <EffectComposer disableNormalPass>
      <Bloom mipmapBlur intensity={2} />
      <Noise opacity={0.015} />
      <Vignette eskil={false} offset={0.1} darkness={1.3} />
    </EffectComposer>
  )
}

export default EffectsColor
