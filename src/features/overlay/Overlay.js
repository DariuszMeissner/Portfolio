import React from 'react'
import { node, objectOf, string } from 'prop-types'

const style = {
  container: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    width: '100%',
    height: '32%',
    overflow: 'hidden'
  }
}

const Overlay = ({ children, styles }) => {
  return (
    <div className="overlay" style={{ ...style.container, ...styles }}>
      {children}
    </div>
  )
}

Overlay.defaultProps = {
  children: null,
  styles: {}
}

Overlay.propTypes = {
  children: node,
  styles: objectOf(string)
}

export default Overlay
