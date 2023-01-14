import React from 'react'
import PropTypes from 'prop-types'

const style = {
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  textTransform: 'uppercase'
}

const Button = ({ onClick, title }) => {
  return (
    <button type="button" onClick={onClick} style={style}>
      {title}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Button
