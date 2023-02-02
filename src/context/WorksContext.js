import React, { createContext, useEffect, useState } from 'react'
import { node } from 'prop-types'

const WorksContext = createContext()

const WorksContextProvider = ({ children }) => {
  const [works, setWorks] = useState(null)

  useEffect(() => {
    const fetchWorks = () => {
      fetch('./data/works.json')
        .then((response) => response.json())
        .then((result) => setWorks(result))
        .catch(() => setWorks(`data didn't load`))
    }

    fetchWorks()
  }, [])

  return <WorksContext.Provider value={works}>{children}</WorksContext.Provider>
}

WorksContextProvider.propTypes = {
  children: node.isRequired
}

export { WorksContext, WorksContextProvider }
