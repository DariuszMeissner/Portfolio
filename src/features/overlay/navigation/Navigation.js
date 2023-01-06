import React from 'react'

const style = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: '10px 20px',
  width: '100%',
  background: 'white'
}
const Navigation = () => {
  return (
    <div style={style}>
      <div
        style={{
          maxWidth: 1440,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto'
        }}>
        <div>
          <span>About,</span>&nbsp;
          <span>dariusz.r.meissner@gmail.com</span>&nbsp;
          <span>li</span>&nbsp;
          <span>github</span>
        </div>
        <span>Works</span>
      </div>
    </div>
  )
}

export default Navigation
