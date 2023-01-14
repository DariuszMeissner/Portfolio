import React, { useState } from 'react'
import PropTypes from 'prop-types'

const StartStopEngine = ({ handleStartEngine }) => {
  const [isActive, setIsActive] = useState(false)

  const style = {
    buttonPosition: {
      background: isActive
        ? 'radial-gradient(circle,rgba(244,52,52,1) 25%, rgba(181,14,14,1) 62%, rgba(69,15,15,1) 100%)'
        : 'radial-gradient(circle, rgba(244,52,52,1) 25%, rgba(199,0,0,1) 62%, rgba(159,10,10,1) 100%)',
      border: 'none',
      outline: '5px solid gray',
      width: 100,
      height: 100,
      borderRadius: '50%',
      cursor: 'pointer'
    },
    button: {
      color: 'white',
      fontSize: 16,
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
      background: isActive ? 'green' : 'black',
      transition: 'background 0.2s ease-in'
    }
  }

  return (
    <button
      onClick={() => {
        handleStartEngine()
        setIsActive((prev) => !prev)
      }}
      type="button"
      style={style.buttonPosition}>
      <div style={style.button}>
        <div style={style.activeLight} />
        <div>Start</div>
        <div style={style.engine}>engine</div>
        <div>Stop</div>
      </div>
    </button>
  )
}

StartStopEngine.propTypes = {
  handleStartEngine: PropTypes.func.isRequired
}

export default StartStopEngine
