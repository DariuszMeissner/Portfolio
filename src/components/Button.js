import React from 'react'
import { buttonType } from '../types'

const style = {
  button: {
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    textTransform: 'uppercase',
    fontFamily: 'Ubuntu',
    fontWeight: 300,
    fontSize: 16
  }
}

const Button = ({ onClick, title, styles }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...style.button, ...styles }}>
      {title}
    </button>
  )
}

Button.defaultProps = {
  styles: {},
  isOverview: false
}

Button.propTypes = buttonType

export default Button
