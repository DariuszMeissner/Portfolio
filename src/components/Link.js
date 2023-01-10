import React from 'react'
import PropTypes from 'prop-types'

const style = {
  cursor: 'pointer'
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

Link.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  href: PropTypes.string.isRequired
}

export default Link
