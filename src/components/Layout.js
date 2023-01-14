import React from 'react'
import PropTypes from 'prop-types'

const style = {
  maxWidth: 1440,
  padding: '10px 20px',
  margin: '0 auto'
}

const Layout = ({ children, styles }) => {
  return (
    <div className="layout" style={{ ...style, ...styles }}>
      {children}
    </div>
  )
}

Layout.defaultProps = {
  styles: {}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.objectOf(PropTypes.string)
}

export default Layout
