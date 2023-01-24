import React from 'react'
import { buttonType } from '../types'

const style = {
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  textTransform: 'uppercase',
  fontFamily: 'Ubuntu',
  fontWeight: 300,
  fontSize: 16
}

const Button = ({ onClick, title }) => {
  return (
    <button type="button" onClick={onClick} style={style}>
      {title}
    </button>
  )
}

Button.propTypes = buttonType

export default Button
