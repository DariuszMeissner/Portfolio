import React from 'react'
import { string } from 'prop-types'

const style = {
  paddingTop: 10
}

const DetailsDescription = ({ description }) => {
  return (
    <p className="details-description" style={style}>
      {description}
    </p>
  )
}

DetailsDescription.propTypes = {
  description: string.isRequired
}

export default DetailsDescription
