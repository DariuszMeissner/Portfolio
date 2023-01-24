import React from 'react'
import { arrayOf, string } from 'prop-types'
import { Lists } from '../../../components'

const style = {
  marginBottom: 20
}

const DetailsTechStack = ({ techStack }) => {
  const renderTechstackItem = (item) => {
    return <li key={item}>{item}&nbsp;/&nbsp;</li>
  }

  return techStack ? (
    <div className="details-techstack" style={style}>
      <span>Tech stack:</span>
      <Lists
        data={techStack}
        renderItem={renderTechstackItem}
        styles={{ display: 'flex', flexWrap: 'wrap' }}
      />
    </div>
  ) : null
}

DetailsTechStack.propTypes = {
  techStack: arrayOf(string).isRequired
}

export default DetailsTechStack
