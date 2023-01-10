import React from 'react'
import PropTypes from 'prop-types'

const style = {
  maxWidth: 1440,
  padding: '0 10px',
  margin: '0 auto'
}

const Layout = ({ children }) => {
  return (
    <div className="layout" style={style}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
