import React from 'react'
import PropTypes from 'prop-types'
import { GrClose } from 'react-icons/gr'

const Close = ({ onClick }) => {
  return (
    <button
      className="close"
      type="button"
      onClick={onClick}
      style={{
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',
        fontSize: 20,
        position: 'absolute',
        top: 20,
        right: 20
      }}>
      <GrClose />
    </button>
  )
}

Close.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Close
