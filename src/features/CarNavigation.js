import React, { useState, useRef } from 'react'
import { bool, func, shape } from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Button3D, Layout } from '../components'
import { StartStopEngine } from './index'

const style = {
  container: {
    position: 'absolute',
    bottom: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    zIndex: '3'
  }
}

const CarNavigation = ({ handleStartEngine, action, scene }) => {
  const [, setInButton] = useState(true)
  const buttonRef = useRef(null)

  return (
    <div className="car-navigation">
      <Layout styles={style.container}>
        <Button3D
          title="light top"
          onClick={() => action.switchLightTop((prev) => !prev)}
        />
        <Button3D
          title="light side"
          onClick={() => action.switchLightSide((prev) => !prev)}
        />
        <Button3D
          title="light front"
          onClick={() => action.switchLightFront((prev) => !prev)}
        />

        <CSSTransition
          in={scene.isAllLightsOn || scene.isOverview}
          nodeRef={buttonRef}
          timeout={2000}
          classNames="fade"
          unmountOnExit
          onEnter={() => setInButton(true)}
          onExited={() => setInButton(false)}>
          <div ref={buttonRef}>
            <StartStopEngine handleStartEngine={handleStartEngine} />
          </div>
        </CSSTransition>
      </Layout>
    </div>
  )
}

CarNavigation.propTypes = {
  handleStartEngine: func.isRequired,
  action: shape({
    switchLightTop: func,
    switchLightSide: func,
    switchLightFront: func
  }).isRequired,
  scene: shape({ isAllLightsOn: bool, isOverview: bool }).isRequired
}

export default CarNavigation
