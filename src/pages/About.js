import React from 'react'
import { Close, Layout } from '../components'
import { pageType } from '../types'

const style = {
  container: {
    position: 'relative',
    background: 'white',
    width: '100%',
    height: '100%'
  },
  layout: {
    padding: '40px 20px',
    textAlign: 'center'
  }
}

const About = ({ closePage }) => {
  return (
    <div className="about" style={style.container}>
      <Layout styles={style.layout}>
        <h2>About me</h2>
        <h3>Hi, Im Dariusz Meissner</h3>
        <Close onClick={closePage} />
        <p>description</p>
      </Layout>
    </div>
  )
}

About.propTypes = pageType

export default About
