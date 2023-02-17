import React, { useEffect, useState } from 'react'
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette
} from '@react-three/postprocessing'

const VIGNETTE = {
  init: 12,
  thick: 0.2,
  final: 1.3
}

const EffectsColor = () => {
  const [vignetteDarkness, setVignetteDarkness] = useState(VIGNETTE.init)

  useEffect(() => {
    if (vignetteDarkness >= VIGNETTE.final) {
      setVignetteDarkness((prev) => prev - VIGNETTE.thick)
    }
  }, [vignetteDarkness])

  return (
    <EffectComposer disableNormalPass>
      <Bloom mipmapBlur intensity={2} />
      <Noise opacity={0.015} />
      <Vignette eskil={false} offset={0.1} darkness={vignetteDarkness} />
    </EffectComposer>
  )
}

export default EffectsColor
