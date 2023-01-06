import React from 'react'
import PropTypes from 'prop-types'

const style = {
  position: 'absolute',
  zIndex: 2,
  top: '50%',
  left: '50%',
  fontSize: 40,
  transform: 'translate(-50%, -50%)',
  color: 'white',
  textAlign: 'center',
  maxWwidth: 400,
  width: '100%'
}

const Intro = ({ children }) => {
  return <div style={style}>{children}</div>
}

Intro.propTypes = {
  children: PropTypes.node.isRequired
}

export default Intro
