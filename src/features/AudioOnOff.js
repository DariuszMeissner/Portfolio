import { bool, func } from 'prop-types'
import React from 'react'

const style = {
  cursor: 'pointer',
  background: 'white',
  fontSize: 14,
  padding: '5px 10px'
}

const AudioOnOff = ({ isMuted, handleMute }) => {
  const styleAnimation = {
    background: isMuted ? '#f8a7a7' : 'white',
    transition: 'background 300ms ease'
  }

  return (
    <button
      type="button"
      onClick={handleMute}
      style={{ ...style, ...styleAnimation }}>
      {isMuted ? 'Audio Off' : 'Audio On'}
    </button>
  )
}

AudioOnOff.propTypes = {
  isMuted: bool.isRequired,
  handleMute: func.isRequired
}

export default AudioOnOff
