import React from 'react'
import { node } from 'prop-types'

const style = {
  position: 'absolute',
  zIndex: 2,
  top: 0,
  height: '100vh',
  width: '100%',
  maxWwidth: 400,
  color: 'white',
  fontSize: 40,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const Intro = ({ children }) => {
  return (
    <div className="intro" style={style}>
      {children}
    </div>
  )
}

Intro.propTypes = {
  children: node.isRequired
}

export default Intro
