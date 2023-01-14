import React from 'react'
import { linkType } from '../types'

const style = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'black'
}

const Link = ({ icon, title, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
      {title || null}
      {icon || null}
    </a>
  )
}

Link.defaultProps = {
  icon: null,
  title: null
}

Link.propTypes = linkType

export default Link
