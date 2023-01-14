import React from 'react'
import { WorksItem } from '..'
import { Lists } from '../../components'

const worksData = [
  {
    id: '1',
    image: '/',
    title: 'simple',
    linkDemo: '/',
    description: 'lorem ipsum lorem'
  },
  {
    id: '2',
    image: '/',
    title: 'simple',
    linkDemo: '/',
    description: 'lorem ipsum lorem'
  },
  {
    id: '3',
    image: '/',
    title: 'simple',
    linkDemo: '/',
    description: 'lorem ipsum lorem'
  }
]

const style = {
  display: 'flex'
}

const WorksTimeLine = () => {
  const renderWorkItem = (item) => {
    return <WorksItem item={item} key={item.id} />
  }

  return <Lists data={worksData} renderItem={renderWorkItem} styles={style} />
}

export default WorksTimeLine
