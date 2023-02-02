import React, { useContext } from 'react'
import { Close, Layout } from '../components'
import { DataContext } from '../context/DataContext'
import { WorksContext } from '../context/WorksContext'
import { WorksContent, WorksItemModal } from '../features'
import { pageType } from '../types'

const style = {
  container: {
    background: '#e6e6e6',
    width: '100%',
    height: '100%',
    overflowY: 'auto'
  },
  layout: {
    maxWidth: '1200px',
    padding: '40px 20px',
    textAlign: 'center',
    marginBottom: '40px'
  }
}

const Works = ({ closePage }) => {
  const { isModal, closeModal } = useContext(DataContext)
  const works = useContext(WorksContext)

  return (
    <>
      {!isModal ? (
        <div className="works" style={style.container}>
          <Layout styles={style.layout}>
            <h2>Latest works</h2>
            <Close onClick={() => closePage()} />
            <WorksContent works={works} />
          </Layout>
        </div>
      ) : null}

      {isModal ? <WorksItemModal closeModal={() => closeModal()} /> : null}
    </>
  )
}

Works.propTypes = pageType

export default Works
