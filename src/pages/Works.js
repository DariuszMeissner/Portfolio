import React from 'react'
import { Close, Layout } from '../components'
import { WorksTimeLine } from '../features'
import { pageType } from '../types'

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

Works.propTypes = pageType

export default Works
