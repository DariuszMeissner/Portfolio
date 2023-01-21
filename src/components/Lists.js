/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { string, func, objectOf, any } from 'prop-types'

const style = {
  padding: 0
}

const Lists = ({ data, renderItem, styles }) => {
  return (
    <ul style={{ ...style, ...styles }}>
      {data.map((item) => renderItem(item))}
    </ul>
  )
}

Lists.propTypes = {
  data: any.isRequired,
  renderItem: func.isRequired,
  styles: objectOf(string)
}

Lists.defaultProps = {
  styles: {}
}

export default Lists
