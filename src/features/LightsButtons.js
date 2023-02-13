import { bool, func, shape } from 'prop-types'
import React from 'react'
import { Button3D } from '../components'

const LightsButtons = ({ isOverview, actions }) => {
  return (
    <>
      <Button3D
        title="light top"
        onClick={() => actions.setTopLight()}
        isOverview={isOverview}
      />
      <Button3D
        title="light side"
        onClick={() => actions.setSideLight()}
        isOverview={isOverview}
      />
      <Button3D
        title="light front"
        onClick={() => actions.setFrontLight()}
        isOverview={isOverview}
      />
    </>
  )
}

LightsButtons.propTypes = {
  isOverview: bool.isRequired,
  actions: shape({ setFrontLight: func, setSideLight: func, setTopLight: func })
    .isRequired
}

export default LightsButtons
