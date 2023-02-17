import React, { useState, useContext } from 'react'
import { CurrentProjectContext } from '../../context/CurrentProjectContext'
import { DataContext } from '../../context/DataContext'
import { useImageLoad, useTimeout } from '../../hooks'
import { worksItemType } from '../../types'

const style = {
  item: {
    cursor: 'pointer',
    listStyle: 'none',
    border: '3px solid',
    transition: 'all 500ms ease'
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    minHeight: '100%',
    display: 'block',
    objectFit: 'cover'
  },
  imageContainer: {
    position: 'relative'
  },
  infoBar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    background: 'rgba(0,0,0, 70%)',
    width: '100%',
    color: 'white',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between'
  }
}

const WorksItem = ({ item }) => {
  const [inItem, setInItem] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isImage] = useImageLoad(item.thumbnail)
  const { openModal } = useContext(DataContext)
  const { saveCurrentProject } = useContext(CurrentProjectContext)

  const styleAnimations = {
    borderColor: isHover ? '#c11111' : 'transparent',
    opacity: inItem ? 1 : 0,
    transform: isHover ? 'scale(1.01)' : 'scale(1)'
  }

  function handleOpenModal() {
    openModal()
    saveCurrentProject(item)
  }

  function delayShowingItem() {
    setInItem(true)
  }

  useTimeout(() => {
    delayShowingItem()
  }, item.id * 150)

  return (
    <li style={{ ...style.item, ...styleAnimations }}>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => handleOpenModal()}
        onKeyDown={() => null}
        tabIndex={0}
        role="button">
        {/* thumbnail */}
        <div style={style.imageContainer}>
          {isImage ? (
            <>
              <img src={item.thumbnail} alt={item.title} style={style.image} />
              <div style={style.infoBar}>
                <span>{item.title}</span>
                <span>{item.tag}</span>
              </div>
            </>
          ) : (
            <span>loading image...</span>
          )}
        </div>
      </div>
    </li>
  )
}

WorksItem.propTypes = {
  item: worksItemType.isRequired
}

export default WorksItem
