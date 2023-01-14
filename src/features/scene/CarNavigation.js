import React, { useContext, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Button3D, Layout } from '../../components'
import { StartStopEngine } from '../index'
import SceneContext from '../../context/SceneContext'

const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '3',
  display: 'flex'
}

const CarNavigation = ({ handleStartEngine }) => {
  const { scene, action } = useContext(SceneContext)
  const [, setInButton] = useState(true)
  const buttonRef = useRef(null)

  return (
    <div className="car-navigation">
      <Layout styles={style}>
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
          in={scene.isAllLightsOn || scene.steps.isOverview}
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
  handleStartEngine: PropTypes.func.isRequired
}

export default CarNavigation
