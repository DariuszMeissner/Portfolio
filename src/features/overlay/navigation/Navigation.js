import React from 'react'
import { func } from 'prop-types'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { Button, Layout, Link } from '../../../components'
import { useSizeScreen } from '../../../hooks'

const style = {
  container: {
    width: '100vw',
    background: 'white'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  infoOnS: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const Navigation = ({ openAboutPage, openWorksPage }) => {
  const screen = useSizeScreen()

  return (
    <nav style={style.container}>
      <Layout>
        <div style={style.nav}>
          <div style={style.info}>
            <Button title="About" onClick={openAboutPage} />

            {!screen.isXS && (
              <>
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
              </>
            )}
          </div>
          <Button title="Works" onClick={openWorksPage} />
        </div>

        {screen.isXS && (
          <div style={style.infoOnS}>
            <Link
              href="https://www.linkedin.com/in/dariusz-robert-meissner/"
              icon={<AiFillLinkedin />}
            />
            <Link
              href="https://github.com/DariuszMeissner"
              icon={<AiOutlineGithub />}
            />
            <Link
              href="mailto:dariusz.r.meissner@gmail.com"
              title="dariusz.r.meissner@gmail.com"
            />
          </div>
        )}
      </Layout>
    </nav>
  )
}

Navigation.propTypes = {
  openAboutPage: func.isRequired,
  openWorksPage: func.isRequired
}

export default Navigation
