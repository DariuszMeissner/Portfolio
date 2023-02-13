import React, { useState } from 'react'
import { bool, func, shape } from 'prop-types'
import { LightsButtons } from '..'
import { useSizeScreen, useTimeout } from '../../hooks'

const style = {
  lightsButtons: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const LightsButtonsOverviewStep = ({ isOverview, actions }) => {
  const [inLightsButtons, setInLightsButtons] = useState(false)
  const screen = useSizeScreen()

  const styleLightsButtonsScreen = {
    transform: screen.isXS ? 'scale(0.8)' : 'scale(0.9)'
  }

  useTimeout(() => {
    setInLightsButtons(true)
  }, 2000)

  return inLightsButtons ? (
    <div style={{ ...style.lightsButtons, ...styleLightsButtonsScreen }}>
      <LightsButtons isOverview={isOverview} actions={actions} />
    </div>
  ) : null
}

LightsButtonsOverviewStep.propTypes = {
  isOverview: bool.isRequired,
  actions: shape({ setFrontLight: func, setSideLight: func, setTopLight: func })
    .isRequired
}

export default LightsButtonsOverviewStep
