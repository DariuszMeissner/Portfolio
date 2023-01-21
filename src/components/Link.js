import React from 'react'
import { linkType } from '../types'

const style = {
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    padding: '3px 0',
    paddingRight: 5,
    display: 'flex',
    alignItems: 'center'
  },
  title: { fontSize: 16 },
  icon: { fontSize: 24, display: 'flex', paddingRight: 5 }
}

const Link = ({ icon, title, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={style.link}>
      {icon ? <span style={style.icon}>{icon}</span> : null}
      {title ? <span style={style.title}>{title}</span> : null}
    </a>
  )
}

Link.defaultProps = {
  icon: null,
  title: null
}

Link.propTypes = linkType

export default Link
