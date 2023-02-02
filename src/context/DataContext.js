import React, { createContext, useMemo, useReducer, useCallback } from 'react'
import { node } from 'prop-types'

export const actions = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  STEPS: {
    CLOSE_INTRO: 'CLOSE_INTRO',
    OPEN_SETUP: 'OPEN_SETUP',
    OPEN_OVERVIEW: 'OPEN_OVERVIEW'
  },
  PAGES: {
    ABOUT_ON: 'ABOUT_ON',
    ABOUT_OFF: 'ABOUT_OFF',
    WORKS_ON: 'WORKS_ON',
    WORKS_OFF: 'WORKS_OFF'
  },
  GALLERY_TECH_STACK: 'GALLERY_TECH_STACK'
}

const DATA_INITIAL_STATE = {
  isGalleryTechStack: false,
  isModal: false,
  steps: {
    isIntro: true,
    isSetup: false,
    isOverview: false
  },
  pages: {
    isAbout: false,
    isWorks: false
  }
}

const DataContext = createContext()

const DataReducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL: {
      return {
        ...state,
        isModal: true
      }
    }
    case actions.CLOSE_MODAL: {
      return {
        ...state,
        isModal: false
      }
    }
    case actions.STEPS.CLOSE_INTRO: {
      return {
        ...state,
        steps: {
          ...state.steps,
          isIntro: false
        }
      }
    }
    case actions.STEPS.OPEN_SETUP: {
      return {
        ...state,
        steps: {
          ...state.steps,
          isSetup: true
        }
      }
    }
    case actions.STEPS.OPEN_OVERVIEW: {
      return {
        ...state,
        steps: {
          ...state.steps,
          isOverview: true
        }
      }
    }
    case actions.PAGES.ABOUT_ON: {
      return {
        ...state,
        pages: {
          ...state.pages,
          isAbout: true
        }
      }
    }
    case actions.PAGES.ABOUT_OFF: {
      return {
        ...state,
        pages: {
          ...state.pages,
          isAbout: false
        }
      }
    }
    case actions.PAGES.WORKS_ON: {
      return {
        ...state,
        pages: {
          ...state.pages,
          isWorks: true
        }
      }
    }
    case actions.PAGES.WORKS_OFF: {
      return {
        ...state,
        pages: {
          ...state.pages,
          isWorks: false
        }
      }
    }
    default:
      return state
  }
}

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, DATA_INITIAL_STATE)

  const openModal = useCallback(() => {
    dispatch({ type: actions.OPEN_MODAL })
  }, [])

  const closeModal = useCallback(() => {
    dispatch({ type: actions.CLOSE_MODAL })
  }, [])

  const closeStepIntro = useCallback(() => {
    dispatch({ type: actions.STEPS.CLOSE_INTRO })
  }, [])

  const openStepSetup = useCallback(() => {
    dispatch({ type: actions.STEPS.OPEN_SETUP })
  }, [])

  const openStepOverview = useCallback(() => {
    dispatch({ type: actions.STEPS.OPEN_OVERVIEW })
  }, [])

  const openPageAbout = useCallback(() => {
    dispatch({ type: actions.PAGES.ABOUT_ON })
  }, [])

  const closePageAbout = useCallback(() => {
    dispatch({ type: actions.PAGES.ABOUT_OFF })
  }, [])

  const openPageWorks = useCallback(() => {
    dispatch({ type: actions.PAGES.WORKS_ON })
  }, [])

  const closePageWorks = useCallback(() => {
    dispatch({ type: actions.PAGES.WORKS_OFF })
  }, [])

  const contextValue = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      closeStepIntro,
      openStepSetup,
      openStepOverview,
      openPageAbout,
      openPageWorks,
      closePageAbout,
      closePageWorks
    }),
    [
      closeModal,
      closePageAbout,
      closePageWorks,
      closeStepIntro,
      openModal,
      openPageAbout,
      openPageWorks,
      openStepOverview,
      openStepSetup,
      state
    ]
  )

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}

DataContextProvider.propTypes = {
  children: node.isRequired
}

export { DataContext, DataContextProvider }
