import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    position: 'absolute',
    zIndex: 4,
    height: '100vh',
    width: '100vw'
  }
}

const PageContainer = ({ children }) => {
  return (
    <div className="page-container" style={style.container}>
      {children}
    </div>
  )
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageContainer
