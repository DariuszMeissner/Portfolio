import React from 'react'
import PropTypes from 'prop-types'
import { Close, Layout } from '../components'

const style = {
  background: 'white',
  width: '100%',
  height: '100%'
}

const About = ({ closePage }) => {
  return (
    <div className="about" style={style}>
      <Layout>
        <h2>About</h2>
        <Close onClick={closePage} />
      </Layout>
    </div>
  )
}

About.propTypes = {
  closePage: PropTypes.func.isRequired
}

export default About
