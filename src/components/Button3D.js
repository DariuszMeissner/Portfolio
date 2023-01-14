import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Button3D = ({ onClick, title }) => {
  const [isActive, setIsActive] = useState(false)

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    activeLight: {
      background: isActive
        ? 'radial-gradient(circle, rgba(233,145,145,1) 13%, rgba(181,14,14,1) 60%)'
        : 'transparent',
      height: 20,
      width: 20,
      margin: 5,
      borderRadius: 50,
      border: '1px solid gray'
    },
    buttonWrap: {
      position: 'relative'
    },
    button: {
      top: isActive ? 6 : 0,
      cursor: 'pointer',
      marginLeft: 5,
      marginBottom: 15,
      height: 65,
      width: 65,
      borderRadius: 5,
      background:
        'linear-gradient(180deg, rgba(229,152,102,1) 25%, rgb(144 85 47) 100%)',
      transition: 'all 0.06s ease-out',
      borderBottom: '1px solid #F0B27A',
      borderTop: '1px solid #F0B27A',
      borderLeft: '1px solid #873600',
      borderRight: '1px solid #873600',
      position: 'relative',
      zIndex: 2
    },
    buttonTitle: {
      textTransform: 'uppercase'
    },
    buttonBefore: {
      background: isActive ? '#552301' : '#873600',
      position: 'absolute',
      left: 0,
      top: 10,
      borderRadius: 5,
      border: '1px solid rgb(85 35 1)',
      height: 65,
      width: 65,
      transition: 'all 0.3s ease',
      marginLeft: 5
    }
  }

  return (
    <div style={style.container}>
      <div style={style.activeLight} />
      <div style={style.buttonWrap}>
        <button
          style={style.button}
          type="button"
          onClick={() => {
            onClick()
            setIsActive((prev) => !prev)
          }}>
          <span style={style.buttonTitle}>{title}</span>
        </button>
        <span style={style.buttonBefore} />
      </div>
    </div>
  )
}

Button3D.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Button3D
