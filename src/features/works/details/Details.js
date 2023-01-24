import React, { useContext } from 'react'
import SceneContext from '../../../context/SceneContext'
import {
  DetailsThumb,
  DetailsTitle,
  DetailsDescription,
  DetailsLinks,
  DetailsFeatures,
  DetailsTechStack
} from '../..'

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
  const { scene } = useContext(SceneContext)
  return (
    <div className="details" style={style.details}>
      <DetailsThumb
        thumb={scene.dataProject.thumbnail}
        title={scene.dataProject.title}
      />
      <div style={style.text}>
        <DetailsTitle
          title={scene.dataProject.title}
          subtitle={scene.dataProject.subtitle}
        />
        <DetailsDescription description={scene.dataProject.description} />
        <DetailsFeatures features={scene.dataProject.features} />
        <DetailsTechStack techStack={scene.dataProject.techStack} />
        <DetailsLinks
          links={{
            demo: scene.dataProject.linkDemo,
            github: scene.dataProject.linkGithub
          }}
        />
      </div>
    </div>
  )
}

export default Details
