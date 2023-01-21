import React from 'react'
import { func } from 'prop-types'
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
        zIndex: 5,
        top: 20,
        right: 20,
        padding: 5
      }}>
      <GrClose />
    </button>
  )
}

Close.propTypes = {
  onClick: func.isRequired
}

export default Close
