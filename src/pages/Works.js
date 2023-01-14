import React from 'react'
import PropTypes from 'prop-types'
import { Close, Layout } from '../components'
import { WorksTimeLine } from '../features'

const style = {
  container: {
    background: 'white',
    width: '100%',
    height: '100%'
  },
  layout: {
    padding: '40px 20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Works = ({ closePage }) => {
  return (
    <div className="works" style={style.container}>
      <Layout styles={style.layout}>
        <h2>Works</h2>
        <Close onClick={closePage} />
        <WorksTimeLine />
      </Layout>
    </div>
  )
}

Works.propTypes = {
  closePage: PropTypes.func.isRequired
}

export default Works
