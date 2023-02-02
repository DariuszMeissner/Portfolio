import React, {
  createContext,
  useMemo,
  useReducer,
  useEffect,
  useCallback
} from 'react'
import { node } from 'prop-types'

export const actions = {
  TOP_LIGHT: 'TOP_LIGHT',
  SIDE_LIGHT: 'SIDE_LIGHT',
  FRONT_LIGHT: 'FRONT_LIGHT',
  ALL_LIGHTS: 'ALL_LIGHTS'
}

const SCENE_LIGHTS_INITIAL_STATE = {
  lights: {
    top: false,
    side: false,
    front: false,
    allIsTurnOn: false
  }
}

const SceneLightsContext = createContext()

const sceneLightsReducer = (state, action) => {
  switch (action.type) {
    case actions.TOP_LIGHT: {
      return {
        lights: {
          ...state.lights,
          top: !state.lights.top
        }
      }
    }
    case actions.SIDE_LIGHT: {
      return {
        lights: {
          ...state.lights,
          side: !state.lights.side
        }
      }
    }
    case actions.FRONT_LIGHT: {
      return {
        lights: {
          ...state.lights,
          front: !state.lights.front
        }
      }
    }
    case actions.ALL_LIGHTS: {
      return {
        lights: {
          ...state.lights,
          allIsTurnOn: action.payload
        }
      }
    }
    default:
      return state
  }
}

const SceneLightsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    sceneLightsReducer,
    SCENE_LIGHTS_INITIAL_STATE
  )

  useEffect(() => {
    const allLightsOn =
      state.lights.front && state.lights.top && state.lights.side

    if (allLightsOn) {
      dispatch({ type: actions.ALL_LIGHTS, payload: true })
    } else {
      dispatch({ type: actions.ALL_LIGHTS, payload: false })
    }
  }, [state.lights.front, state.lights.side, state.lights.top])

  const setTopLight = useCallback(() => {
    dispatch({ type: actions.TOP_LIGHT })
  }, [])

  const setFrontLight = useCallback(() => {
    dispatch({ type: actions.FRONT_LIGHT })
  }, [])

  const setSideLight = useCallback(() => {
    dispatch({ type: actions.SIDE_LIGHT })
  }, [])

  const contextValue = useMemo(
    () => ({
      ...state,
      setTopLight,
      setFrontLight,
      setSideLight
    }),
    [setFrontLight, setSideLight, setTopLight, state]
  )

  return (
    <SceneLightsContext.Provider value={contextValue}>
      {children}
    </SceneLightsContext.Provider>
  )
}

SceneLightsContextProvider.propTypes = {
  children: node.isRequired
}

export { SceneLightsContext, SceneLightsContextProvider }
