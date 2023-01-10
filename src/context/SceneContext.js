import { createContext } from 'react'

const SceneContext = createContext({
  scene: {
    lightTop: false,
    lightSide: false,
    lightfront: false,
    steps: {
      isIntro: true,
      isSetup: false,
      isOverview: false
    }
  },
  action: {
    switchLightTop: () => null,
    switchLightSide: () => null,
    switchLightFront: () => null,
    setIsIntro: () => null,
    setIsSetup: () => null,
    setIsOverview: () => null
  }
})

export default SceneContext
