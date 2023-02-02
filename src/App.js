import React from 'react'
import { SceneLightsContextProvider } from './context/SceneLightsContext'
import { WorksContextProvider } from './context/WorksContext'
import { CurrentProjectContextProvider } from './context/CurrentProjectContext'
import { Home } from './pages'
import EngineOn from './assets/audio/lamboEngineOn.mp3'
import EngineOff from './assets/audio/lamboEngineOff.mp3'
import './App.scss'
import { SceneCarContextProvider } from './context/SceneCarContext'
import { DataContextProvider } from './context/DataContext'

export const audio = {
  engine: {
    on: new Audio(EngineOn),
    off: new Audio(EngineOff)
  }
}

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
