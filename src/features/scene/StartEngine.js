import React from 'react'
import PropTypes from 'prop-types'

const style = {
  buttonPosition: {
    position: 'absolute',
    zIndex: 3,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'red',
    border: 'none',
    outline: 'gray solid 10px',
    width: 100,
    height: 100,
    borderRadius: '50%',
    cursor: 'pointer'
  },
  button: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  engine: {
    fontSize: 12
  }
}

const StartEngine = ({ handleStartEngine }) => {
  return (
    <button
      onClick={handleStartEngine}
      type="button"
      style={style.buttonPosition}>
      <div style={style.button}>
        <div>Start</div>
        <div style={style.engine}>engine</div>
        <div>Stop</div>
      </div>
    </button>
  )
}

StartEngine.propTypes = {
  handleStartEngine: PropTypes.func.isRequired
}

export default StartEngine
