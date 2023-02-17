import React, {
  createContext,
  useMemo,
  useReducer,
  useCallback,
  useEffect
} from 'react'
import { node } from 'prop-types'
import EngineOn from '../assets/audio/lamboEngineOn.mp3'
import EngineOnLoop from '../assets/audio/lamboEngineOnLoop.mp3'
import EngineOff from '../assets/audio/lamboEngineOff.mp3'

export const actions = {
  LIGHT_EMISSIVE: 'LIGHT_EMISSIVE',
  ZOOM_GALLERY_ON: 'ZOOM_GALLERY_ON',
  ZOOM_GALLERY_OFF: 'ZOOM_GALLERY_OFF',
  ENGINE_OFF: 'ENGINE_OFF',
  ENGINE_ON: 'ENGINE_ON',
  MUTE: 'MUTE',
  START_STOP_ENGINE: 'START_STOP_ENGINE'
}

const SCENE_CAR_INITIAL_STATE = {
  lightEmissive: 0,
  isZoomGallery: false,
  isEngineOn: false,
  isMuted: false,
  isClickedStartButton: null
}

export const audio = {
  engine: {
    on: new Audio(EngineOn),
    onLoop: new Audio(EngineOnLoop),
    off: new Audio(EngineOff)
  }
}

const AUDIO_VOLUME_DOWN = 0.4

const SceneCarContext = createContext()

const sceneCarReducer = (state, action) => {
  switch (action.type) {
    case actions.START_STOP_ENGINE: {
      return {
        ...state,
        isClickedStartButton: !state.isClickedStartButton
      }
    }
    case actions.ENGINE_ON: {
      audio.engine.on.play()
      audio.engine.on.volume = 1

      setTimeout(() => {
        audio.engine.on.volume = AUDIO_VOLUME_DOWN
      }, 8000)

      return {
        ...state,
        lightEmissive: 8,
        isEngineOn: true
      }
    }
    case actions.ENGINE_OFF: {
      if (state.isEngineOn) {
        audio.engine.on.currentTime = 0
        audio.engine.on.pause()

        audio.engine.onLoop.currentTime = 0
        audio.engine.onLoop.pause()

        audio.engine.off.play()
      }

      return {
        ...state,
        lightEmissive: 0,
        isEngineOn: false
      }
    }
    case actions.ZOOM_GALLERY_ON: {
      return {
        ...state,
        isZoomGallery: true
      }
    }
    case actions.ZOOM_GALLERY_OFF: {
      return {
        ...state,
        isZoomGallery: false
      }
    }
    case actions.MUTE: {
      if (state.isMuted) {
        audio.engine.on.muted = false
        audio.engine.onLoop.muted = false
        audio.engine.off.muted = false
      } else {
        audio.engine.on.muted = true
        audio.engine.onLoop.muted = true
        audio.engine.off.muted = true
      }
      return {
        ...state,
        isMuted: !state.isMuted
      }
    }
    default:
      return state
  }
}

const SceneCarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sceneCarReducer, SCENE_CAR_INITIAL_STATE)

  function startLoop() {
    audio.engine.onLoop.play()
    audio.engine.on.volume = AUDIO_VOLUME_DOWN
    audio.engine.onLoop.loop = true
  }

  const detectAndStartStopEngine = useCallback(() => {
    if (state.isClickedStartButton) {
      dispatch({ type: actions.ENGINE_ON })
    } else {
      dispatch({ type: actions.ENGINE_OFF })
    }
  }, [state.isClickedStartButton])

  useEffect(() => {
    detectAndStartStopEngine()
  }, [detectAndStartStopEngine, state.isClickedStartButton])

  useEffect(() => {
    audio.engine.on.addEventListener('ended', () => startLoop())

    return () => {
      audio.engine.on.removeEventListener('ended', () => startLoop())
    }
  }, [])

  const setCarLightEmissive = useCallback((value) => {
    dispatch({ type: actions.LIGHT_EMISSIVE, payload: value })
  }, [])

  const setZoomGalleryOn = useCallback(() => {
    dispatch({ type: actions.ZOOM_GALLERY_ON })
  }, [])

  const setZoomGalleryOff = useCallback(() => {
    dispatch({ type: actions.ZOOM_GALLERY_OFF })
  }, [])

  const setEngineOn = useCallback(() => {
    dispatch({ type: actions.ENGINE_ON })
  }, [])

  const setEngineOff = useCallback(() => {
    dispatch({ type: actions.ENGINE_OFF })
  }, [])

  const setMuteAudio = useCallback(() => {
    dispatch({ type: actions.MUTE })
  }, [])

  const startStopEngine = useCallback(() => {
    dispatch({ type: actions.START_STOP_ENGINE })
  }, [])

  const contextValue = useMemo(
    () => ({
      carState: {
        ...state
      },
      carActions: {
        setCarLightEmissive,
        setZoomGalleryOn,
        setZoomGalleryOff,
        setEngineOn,
        setEngineOff,
        setMuteAudio,
        startStopEngine
      }
    }),
    [
      setCarLightEmissive,
      setEngineOff,
      setEngineOn,
      setMuteAudio,
      setZoomGalleryOff,
      setZoomGalleryOn,
      state,
      startStopEngine
    ]
  )

  return (
    <SceneCarContext.Provider value={contextValue}>
      {children}
    </SceneCarContext.Provider>
  )
}

SceneCarContextProvider.propTypes = {
  children: node.isRequired
}

export { SceneCarContext, SceneCarContextProvider }
