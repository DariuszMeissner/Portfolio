import React from 'react'
import { func, string } from 'prop-types'
import { IoIosArrowRoundBack } from 'react-icons/io'

const style = {
  button: {
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    position: 'absolute',
    zIndex: 5,
    top: 20,
    right: 20,
    padding: 5,
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    fontSize: 30
  },
  title: {
    fontSize: 13,
    textTransform: 'uppercase'
  }
}

const DetailsButtonBack = ({ title, onClick }) => {
  return (
    <button
      className="close"
      type="button"
      onClick={onClick}
      style={style.button}>
      <IoIosArrowRoundBack style={style.icon} />
      <span style={style.title}>{title}</span>
    </button>
  )
}

DetailsButtonBack.propTypes = {
  title: string.isRequired,
  onClick: func.isRequired
}

export default DetailsButtonBack
