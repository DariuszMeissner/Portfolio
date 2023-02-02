import React from 'react'
import { bool, func } from 'prop-types'
import { Html } from '@react-three/drei'

const style = {
  cursor: 'pointer',
  background: 'white',
  fontSize: 14,
  padding: '5px 10px',
  border: 'none'
}

const AudioOnOff = ({ isMuted, handleMute }) => {
  const styleAnimation = {
    background: isMuted ? '#f8a7a7' : 'white',
    transition: 'background 300ms ease'
  }

  return (
    <mesh>
      <Html
        zIndexRange={1}
        style={{
          position: 'absolute',
          right: '-50vw'
        }}>
        <button
          type="button"
          onClick={() => handleMute((prev) => !prev)}
          style={{ ...style, ...styleAnimation }}>
          {isMuted ? 'Audio Off' : 'Audio On'}
        </button>
      </Html>
    </mesh>
  )
}

AudioOnOff.propTypes = {
  isMuted: bool.isRequired,
  handleMute: func.isRequired
}

export default AudioOnOff
