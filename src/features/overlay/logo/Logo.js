import React, { useRef, useState, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Layout } from '../../../components'
import SceneContext from '../../../context/SceneContext'
import { useTimeout } from '../../../hooks'

const Logo = () => {
  const { scene } = useContext(SceneContext)
  const [inLogo, setInLogo] = useState(false)
  const logoRef = useRef(null)

  const style = {
    container: {
      position: 'absolute',
      fontFamily: 'Caveat',
      margin: 'inherit',
      padding: '0 20px',
      fontSize: 20,
      color: 'white',
      left: scene.pages.isAboutPage || scene.pages.isWorksPage ? '50%' : 0,
      transform:
        scene.pages.isAboutPage || scene.pages.isWorksPage
          ? 'translateX(-50%)'
          : 'translateX(0)',
      transition: 'all 500ms ease'
    },
    text: {
      verticalAlign: 'middle'
    },
    layout: {
      height: '50px'
    }
  }

  useTimeout(() => {
    setInLogo(true)
  }, 500)

  return (
    <Layout styles={style.layout}>
      <CSSTransition
        in={inLogo}
        nodeRef={logoRef}
        timeout={1000}
        classNames="fade"
        unmountOnExit
        onEnter={() => setInLogo(true)}
        onExited={() => setInLogo(false)}>
        <div ref={logoRef} style={style.container}>
          <span style={style.text}>Dariusz Meissner</span>
        </div>
      </CSSTransition>
    </Layout>
  )
}

export default Logo
