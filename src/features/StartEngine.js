import React from 'react'
import PropTypes from 'prop-types'

const StartEngine = ({ handleTurnOnLight }) => {
  return (
    <button
      onClick={handleTurnOnLight}
      type="button"
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        cursor: 'pointer'
      }}>
      <span>START</span>
      <span>engine</span>
      <span>STOP</span>
    </button>
  )
}

StartEngine.propTypes = {
  handleTurnOnLight: PropTypes.func.isRequired
}

export default StartEngine
