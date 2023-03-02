import React from 'react'
import { Close, Link, Layout, Button } from '../components'
import { useImageLoad, useSizeScreen } from '../hooks'
import { pageType } from '../types'
import CV_PDF from '../assets/DariuszMeissner_CV.pdf'

const style = {
  container: {
    position: 'relative',
    background: 'white',
    width: '100%',
    height: '100%'
  },
  layout: {
    maxWidth: '1200px',
    padding: '50px 20px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  info: {
    container: {
      padding: 10
    },
    image: {
      width: 'auto',
      paddingRight: 40
    },
    subtitle: {
      marginBottom: 30
    },
    cv: {
      display: 'flex',
      marginBottom: 10
    },
    projects: {
      display: 'flex'
    }
  }
}

const About = ({ closePage, openWorksPage }) => {
  const [isImage] = useImageLoad('./profile_cv.png')
  const screen = useSizeScreen()

  const styleOnXS = {
    image: {
      height: screen.isXS || screen.isS ? 150 : 300
    }
  }

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
            style={{ ...style.info.image, ...styleOnXS.image }}
          />
        ) : (
          <span>loading image...</span>
        )}

        {/* info */}
        <div style={style.info.container}>
          <h2>{`I'm Dariusz Meissner`}</h2>
          <h3 style={style.info.subtitle}>{`I'm a Front-End Developer`}</h3>
          <p>I like to build with code using library React.</p>
          <p>{`I'm interested in web development, games, ux/ui design and computer graphics.`}</p>

          <div style={style.info.cv}>
            <p>If you want to known more about me check out&nbsp;</p>
            <Link href={CV_PDF} title="My CV." />
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
