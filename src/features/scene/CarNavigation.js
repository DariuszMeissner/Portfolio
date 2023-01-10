import React, { useContext, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Button } from '../../components'
import { StartEngine } from '../index'
import SceneContext from '../../context/SceneContext'

const CarNavigation = ({ handleStartEngine }) => {
  const { action } = useContext(SceneContext)
  const [inButton, setInButton] = useState(true)
  const buttonRef = useRef(null)

  return (
    <div className="car-navigation">
      <Button
        title="turn on light top"
        onClick={() => action.switchLightTop((prev) => !prev)}
      />
      <Button
        title="turn on light side"
        onClick={() => action.switchLightSide((prev) => !prev)}
      />
      <Button
        title="turn on light front"
        onClick={() => action.switchLightFront((prev) => !prev)}
      />

      <CSSTransition
        in={inButton}
        nodeRef={buttonRef}
        timeout={2000}
        classNames="fade"
        unmountOnExit
        onEnter={() => setInButton(true)}
        onExited={() => setInButton(false)}>
        <div ref={buttonRef}>
          <StartEngine handleStartEngine={handleStartEngine} />
        </div>
      </CSSTransition>
    </div>
  )
}

CarNavigation.propTypes = {
  handleStartEngine: PropTypes.func.isRequired
}

export default CarNavigation
