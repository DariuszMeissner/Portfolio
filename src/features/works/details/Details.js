import React, { useContext } from 'react'
import {
  DetailsThumb,
  DetailsTitle,
  DetailsDescription,
  DetailsLinks,
  DetailsFeatures,
  DetailsTechStack,
  DeatailsDate
} from '../..'
import { CurrentProjectContext } from '../../../context/CurrentProjectContext'

const style = {
  details: {
    marginTop: 80,
    marginBottom: 80,
    background: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
  },
  text: {
    padding: 20
  }
}

const Details = () => {
  const { project } = useContext(CurrentProjectContext)

  return (
    <div className="details" style={style.details}>
      <DetailsThumb thumb={project.thumbnail} title={project.title} />
      <div style={style.text}>
        <DetailsTitle title={project.title} subtitle={project.subtitle} />
        <DeatailsDate date={project.date} />
        <DetailsDescription description={project.description} />
        <DetailsFeatures features={project.features} />
        <DetailsTechStack techStack={project.techStack} />
        <DetailsLinks
          links={{
            demo: project.linkDemo,
            github: project.linkGithub
          }}
        />
      </div>
    </div>
  )
}

export default Details
