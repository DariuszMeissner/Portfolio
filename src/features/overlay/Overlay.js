import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }
}

const Overlay = ({ children }) => {
  return (
    <div className="overlay" style={style.container}>
      {children}
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired
}

export default Overlay
