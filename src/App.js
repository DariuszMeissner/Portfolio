import React from 'react'
import { SceneLightsContextProvider } from './context/SceneLightsContext'
import { WorksContextProvider } from './context/WorksContext'
import { CurrentProjectContextProvider } from './context/CurrentProjectContext'
import { Home } from './pages'
import './App.scss'
import { SceneCarContextProvider } from './context/SceneCarContext'
import { DataContextProvider } from './context/DataContext'

const App = () => {
  return (
    <WorksContextProvider>
      <CurrentProjectContextProvider>
        <SceneCarContextProvider>
          <SceneLightsContextProvider>
            <DataContextProvider>
              <div className="app">
                <Home />
              </div>
            </DataContextProvider>
          </SceneLightsContextProvider>
        </SceneCarContextProvider>
      </CurrentProjectContextProvider>
    </WorksContextProvider>
  )
}

export default App
