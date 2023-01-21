import React from 'react'
import { string } from 'prop-types'

const style = {
  title: {
    fontSize: 26,
    textTransform: 'uppercase',
    paddingTop: 10
  },
  subtitle: {
    fontSize: 20,
    paddingTop: 5
  }
}

const DetailsTitle = ({ title, subtitle }) => {
  return (
    <div className="details-title">
      <div style={style.title}>{title}</div>
      <div style={style.subtitle}>{subtitle}</div>
    </div>
  )
}

DetailsTitle.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired
}

export default DetailsTitle
