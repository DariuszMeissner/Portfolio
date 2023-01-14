import React, { useState } from 'react'
import { Link } from '../../components'
import { useTimeout } from '../../hooks'
import { worksItemType } from '../../types'

const WorksItem = ({ item }) => {
  const [inItem, setInItem] = useState(false)

  const style = {
    container: {
      opacity: inItem ? 1 : 0,
      transition: 'all 1000ms ease',
      listStyle: 'none'
    },
    data: {
      padding: 20
    }
  }

  useTimeout(() => {
    setInItem(true)
  }, Number(item.id) * 300)

  return (
    <li style={style.container}>
      <img src={item.image} alt={item.title} />
      <div style={style.data}>
        <h3>{item.title}</h3>
        <Link title="demo" href={item.linkDemo} />
        <p>{item.description}</p>
      </div>
    </li>
  )
}

WorksItem.propTypes = {
  item: worksItemType.isRequired
}

export default WorksItem
