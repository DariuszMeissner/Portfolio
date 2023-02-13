import React, { useState } from 'react'
import { bool, func } from 'prop-types'

const style = {
  buttonPosition: {
    border: 'none',
    outline: '5px solid gray',
    width: 80,
    height: 80,
    borderRadius: '50%',
    cursor: 'pointer'
  },
  button: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  engine: {
    fontSize: 9
  },
  activeLight: {
    height: 3,
    width: 30,
    marginBottom: 10,
    borderRadius: 20,
    transition: 'background 0.2s ease-in'
  }
}

const StartStopEngine = ({ handleStartEngine, isOverview }) => {
  const [isActive, setIsActive] = useState(isOverview || false)

  const styleAnimations = {
    buttonPosition: {
      background: isActive
        ? 'radial-gradient(circle,rgba(244,52,52,1) 25%, rgba(181,14,14,1) 62%, rgba(69,15,15,1) 100%)'
        : 'radial-gradient(circle, rgba(244,52,52,1) 25%, rgba(199,0,0,1) 62%, rgba(159,10,10,1) 100%)'
    },
    activeLight: {
      background: isActive ? 'green' : 'black'
    }
  }

  return (
    <button
      onClick={() => {
        handleStartEngine()
        setIsActive((prev) => !prev)
      }}
      type="button"
      style={{ ...style.buttonPosition, ...styleAnimations.buttonPosition }}>
      <div style={style.button}>
        <div style={{ ...style.activeLight, ...styleAnimations.activeLight }} />
        <div>Start</div>
        <div style={style.engine}>engine</div>
        <div>Stop</div>
      </div>
    </button>
  )
}

StartStopEngine.propTypes = {
  handleStartEngine: func.isRequired,
  isOverview: bool.isRequired
}

export default StartStopEngine
