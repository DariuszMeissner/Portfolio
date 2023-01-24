import React, { useEffect, useRef, useState } from 'react'
import { func } from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Layout } from '../../components'
import { Details, DetailsButtonBack } from '..'

const style = {
  container: {
    position: 'absolute',
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#e6e6e6',
    overflowY: 'auto'
  },
  layout: {
    maxWidth: '750px'
  }
}

const WorksItemModal = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    setIsOpen(true)
  }, [isOpen])

  return (
    <div className="worksItem-modal" style={style.container} ref={modalRef}>
      <Layout styles={style.layout}>
        <CSSTransition
          in={isOpen}
          nodeRef={contentRef}
          timeout={500}
          classNames="fade"
          unmountOnExit
          onEnter={() => setIsOpen(true)}
          onExited={() => setIsOpen(false)}>
          <div ref={contentRef}>
            <DetailsButtonBack
              onClick={closeModal}
              title="Back to all projects"
            />
            <Details />
          </div>
        </CSSTransition>
      </Layout>
    </div>
  )
}

WorksItemModal.propTypes = {
  closeModal: func.isRequired
}

export default WorksItemModal
