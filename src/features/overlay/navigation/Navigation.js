import React, { useState } from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { Button, Layout, Link, PageContainer } from '../../../components'
import { About, Works } from '../../../pages'

const style = {
  container: {
    position: 'absolute',
    zIndex: 4,
    bottom: 0,
    left: 0,
    padding: '10px 20px',
    width: '100%',
    background: 'white'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}
const Navigation = () => {
  const [isAboutPage, setAboutPage] = useState(false)
  const [isWorksPage, setWorksPage] = useState(false)

  function openPage(statePage) {
    statePage(true)
  }

  function closePage(statePage) {
    statePage(false)
  }

  return (
    <>
      <nav style={style.container}>
        <Layout>
          <div style={style.nav}>
            <div>
              <Button title="About" onClick={() => openPage(setAboutPage)} />
              <Link
                href="mailto:dariusz.r.meissner@gmail.com"
                title="dariusz.r.meissner@gmail.com"
              />
              <Link
                href="https://www.linkedin.com/in/dariusz-robert-meissner/"
                icon={<AiFillLinkedin />}
              />
              <Link
                href="https://github.com/DariuszMeissner"
                icon={<AiOutlineGithub />}
              />
            </div>
            <Button title="Works" onClick={() => openPage(setWorksPage)} />
          </div>
        </Layout>
      </nav>

      {isAboutPage ? (
        <PageContainer>
          <About closePage={() => closePage(setAboutPage)} />
        </PageContainer>
      ) : null}

      {isWorksPage ? (
        <PageContainer>
          <Works closePage={() => closePage(setWorksPage)} />
        </PageContainer>
      ) : null}
    </>
  )
}

export default Navigation
