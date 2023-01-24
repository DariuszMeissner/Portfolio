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
    subtitle: {
      marginBottom: 40
    }
  }
}

const About = ({ closePage, openWorksPage }) => {
  const [isImage] = useImageLoad('./profile_cv.png')

  return (
    <div className="about" style={style.container}>
      <Layout styles={style.layout}>
        <Close onClick={closePage} />

        {isImage ? (
          <img src="./profile_cv.png" alt="profile_image" />
        ) : (
          <span>loading image...</span>
        )}

        {/* info */}
        <div style={style.info.container}>
          <h2>{`I'm Dariusz Meissner`}</h2>
          <h3 style={style.info.subtitle}>{`I'm Front-End Developer`}</h3>
          <p>I like builde something by code with library React.</p>
          <p>{`I'm interesting web development, games, ux/ui design and computer graphics`}</p>
          <p>If you want to see about me more,</p>
          <Link
            href="https://www.linkedin.com/in/dariusz-robert-meissner/"
            title="My CV."
          />
          <p>To see my projects, click in button</p>
          <Button
            title="WORKS"
            onClick={() => {
              closePage()
              openWorksPage()
            }}
          />
        </div>
      </Layout>
    </div>
  )
}

About.propTypes = pageType

export default About
