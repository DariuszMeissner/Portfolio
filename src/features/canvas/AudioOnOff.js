import React from 'react'
import { bool, func } from 'prop-types'

const style = {
  container: {
    position: 'absolute',
    right: 0,
    top: '10vh',
    zIndex: 5
  },
  button: {
    cursor: 'pointer',
    background: 'white',
    fontSize: 14,
    padding: '5px 10px',
    border: 'none'
  },
  subtitle: {
    fontSize: 12
  }
}

const AudioOnOff = ({ isMuted, setMuteAudio }) => {
  const styleAnimation = {
    background: isMuted ? '#f8a7a7' : 'white',
    transition: 'background 300ms ease'
  }

  return (
    <div style={style.container}>
      <button
        type="button"
        onClick={() => setMuteAudio()}
        style={{ ...style.button, ...styleAnimation }}>
        <span>{isMuted ? 'Audio Off' : 'Audio On'}</span>
        <div style={style.subtitle}>click to&nbsp;{isMuted ? 'On' : 'Off'}</div>
      </button>
    </div>
  )
}

AudioOnOff.propTypes = {
  isMuted: bool.isRequired,
  setMuteAudio: func.isRequired
}

export default AudioOnOff
