import React, { createContext, useMemo, useReducer, useCallback } from 'react'
import { node } from 'prop-types'

export const actions = {
  LIGHT_EMISSIVE: 'LIGHT_EMISSIVE',
  ZOOM_GALLERY_ON: 'ZOOM_GALLERY_ON',
  ZOOM_GALLERY_OFF: 'ZOOM_GALLERY_OFF',
  ENGINE_OFF: 'ENGINE_OFF',
  ENGINE_ON: 'ENGINE_ON'
}

const SCENE_CAR_INITIAL_STATE = {
  lightEmissive: 0,
  isZoomGallery: false,
  isEngineOn: false
}

const SceneCarContext = createContext()

const sceneCarReducer = (state, action) => {
  switch (action.type) {
    case actions.LIGHT_EMISSIVE: {
      return {
        ...state,
        lightEmissive: state.lightEmissive + action.payload
      }
    }
    case actions.ENGINE_ON: {
      return {
        ...state,
        isEngineOn: true
      }
    }
    case actions.ENGINE_OFF: {
      return {
        ...state,
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
    default:
      return state
  }
}

const SceneCarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sceneCarReducer, SCENE_CAR_INITIAL_STATE)

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
        setEngineOff
      }
    }),
    [
      setCarLightEmissive,
      setEngineOff,
      setEngineOn,
      setZoomGalleryOff,
      setZoomGalleryOn,
      state
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
