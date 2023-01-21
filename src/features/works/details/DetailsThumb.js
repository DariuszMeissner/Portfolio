import React from 'react'
import { string } from 'prop-types'

const style = {
  thumb: {
    width: '100%'
  }
}

const DetailsThumb = ({ thumb, title }) => {
  return <img src={thumb} alt={title} style={style.thumb} />
}

DetailsThumb.propTypes = {
  thumb: string.isRequired,
  title: string.isRequired
}

export default DetailsThumb
