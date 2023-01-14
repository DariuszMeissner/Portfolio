/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { shape, string, arrayOf, func, objectOf } from 'prop-types'

const style = {
  padding: 0,
  paddingTop: 20
}

const Lists = ({ data, renderItem, styles }) => {
  return (
    <ul style={{ ...style, ...styles }}>
      {data.map((item) => renderItem(item))}
    </ul>
  )
}

Lists.propTypes = {
  data: arrayOf(
    shape({
      id: string,
      image: string,
      title: string,
      linkDemo: string,
      description: string
    })
  ).isRequired,
  renderItem: func.isRequired,
  styles: objectOf(string)
}

Lists.defaultProps = {
  styles: {}
}

export default Lists
