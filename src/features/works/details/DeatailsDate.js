import { string } from 'prop-types'
import React from 'react'

const style = {
  fontSize: 12,
  paddingTop: 4
}

const DeatailsDate = ({ date }) => {
  return (
    <div className="details-date" style={style}>
      {date}
    </div>
  )
}

DeatailsDate.propTypes = {
  date: string.isRequired
}

export default DeatailsDate
