import React from 'react'
import PropTypes from 'prop-types'
import { GrClose } from 'react-icons/gr'

const Close = ({ onClick }) => {
  return (
    <button
      className="close"
      type="button"
      onClick={onClick}
      style={{ cursor: 'pointer' }}>
      <GrClose />
    </button>
  )
}

Close.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Close
