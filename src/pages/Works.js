import React from 'react'
import PropTypes from 'prop-types'
import { Close, Layout } from '../components'

const style = {
  background: 'white',
  width: '100%',
  height: '100%'
}

const Works = ({ closePage }) => {
  return (
    <div className="works" style={style}>
      <Layout>
        <h2>Works</h2>
        <Close onClick={closePage} />
      </Layout>
    </div>
  )
}

Works.propTypes = {
  closePage: PropTypes.func.isRequired
}

export default Works
