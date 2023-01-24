import React from 'react'
import { arrayOf, string } from 'prop-types'
import { Lists } from '../../../components'

const style = {
  container: {
    marginBottom: 20
  },
  item: {
    paddingLeft: 15
  }
}

const DetailsFeatures = ({ features }) => {
  const renderFeaturesItem = (item) => {
    return (
      <li style={style.item} key={item}>
        {item}
      </li>
    )
  }

  return features ? (
    <div className="details-features" style={style.container}>
      <span>Features:</span>
      <Lists
        data={features}
        renderItem={renderFeaturesItem}
        styles={{ listStyle: 'disc inside' }}
      />
    </div>
  ) : null
}

DetailsFeatures.propTypes = {
  features: arrayOf(string).isRequired
}

export default DetailsFeatures
