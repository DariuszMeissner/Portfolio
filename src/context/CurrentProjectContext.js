import React, { createContext, useCallback, useState, useMemo } from 'react'
import { node } from 'prop-types'

const CurrentProjectContext = createContext()

const CurrentProjectContextProvider = ({ children }) => {
  const [project, setProject] = useState(null)

  const saveCurrentProject = useCallback((data) => {
    setProject(data)
  }, [])

  const contextValue = useMemo(
    () => ({
      project,
      saveCurrentProject
    }),
    [project, saveCurrentProject]
  )

  return (
    <CurrentProjectContext.Provider value={contextValue}>
      {children}
    </CurrentProjectContext.Provider>
  )
}

CurrentProjectContextProvider.propTypes = {
  children: node.isRequired
}

export { CurrentProjectContext, CurrentProjectContextProvider }
