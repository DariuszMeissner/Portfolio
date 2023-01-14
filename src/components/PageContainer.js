import React from 'react'
import { node } from 'prop-types'

const style = {
  container: {
    position: 'relative',
    zIndex: 5,
    height: '100vh',
    width: '100vw',
    display: 'flex'
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
  children: node.isRequired
}

export default PageContainer
