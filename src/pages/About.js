import React from 'react'
import { Close, Link, Layout, Button } from '../components'
import { useImageLoad } from '../hooks'
import { pageType } from '../types'

const style = {
  container: {
    position: 'relative',
    background: 'white',
    width: '100%',
    height: '100%'
  },
  layout: {
    maxWidth: '1200px',
    padding: '40px 20px',
    display: 'flex'
  },
  info: {
    container: {
      padding: 10,
      paddingLeft: 40
    },
    image: {
      width: 'auto',
      height: 300
    },
    subtitle: {
      marginBottom: 40
    },
    cv: {
      display: 'flex',
      marginBottom: 40
    },
    projects: {
      display: 'flex'
    }
  }
}

const About = ({ closePage, openWorksPage }) => {
  const [isImage] = useImageLoad('./profile_cv.png')

  const handleGoToWorksPage = () => {
    closePage()
    openWorksPage()
  }

  return (
    <div className="about" style={style.container}>
      <Layout styles={style.layout}>
        <Close onClick={closePage} />

        {isImage ? (
          <img
            src="./profile_cv.png"
            alt="profile_image"
            style={style.info.image}
          />
        ) : (
          <span>loading image...</span>
        )}

        {/* info */}
        <div style={style.info.container}>
          <h2>{`I'm Dariusz Meissner`}</h2>
          <h3 style={style.info.subtitle}>{`I'm Front-End Developer`}</h3>
          <p>I like builde something by code with library React.</p>
          <p>{`I'm interesting web development, games, ux/ui design and computer graphics.`}</p>

          <div style={style.info.cv}>
            <p>If you want to read about me more,&nbsp;</p>
            <Link
              href="https://www.linkedin.com/in/dariusz-robert-meissner/"
              title="My CV."
            />
          </div>

          <div style={style.info.projects}>
            <p>To see my projects,&nbsp;</p>
            <Button title="click here" onClick={() => handleGoToWorksPage()} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

About.propTypes = pageType

export default About
