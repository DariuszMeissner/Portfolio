import React, { useRef, useState } from 'react'
import { bool, shape } from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Layout } from '../../../components'
import { useTimeout } from '../../../hooks'

const style = {
  container: {
    position: 'absolute',
    fontFamily: 'Caveat',
    margin: 'inherit',
    padding: '0 20px',
    fontSize: 20,
    color: 'white',
    transition: 'all 500ms ease'
  },
  text: {
    verticalAlign: 'middle'
  },
  layout: {
    height: '50px'
  }
}

const Logo = ({ pages }) => {
  const [inLogo, setInLogo] = useState(false)
  const logoRef = useRef(null)

  const styleAnimations = {
    left: pages.isAbout || pages.isWorks ? '50%' : 0,
    transform:
      pages.isAbout || pages.isWorks ? 'translateX(-50%)' : 'translateX(0)'
  }

  useTimeout(() => {
    setInLogo(true)
  }, 500)

  return (
    <Layout styles={style.layout}>
      <CSSTransition
        in={inLogo}
        nodeRef={logoRef}
        timeout={600}
        classNames="fade"
        unmountOnExit
        onEnter={() => setInLogo(true)}
        onExited={() => setInLogo(false)}>
        <div ref={logoRef} style={{ ...style.container, ...styleAnimations }}>
          <span style={style.text}>Dariusz Meissner</span>
        </div>
      </CSSTransition>
    </Layout>
  )
}

Logo.propTypes = {
  pages: shape({ isAbout: bool, isWorks: bool }).isRequired
}

export default Logo
