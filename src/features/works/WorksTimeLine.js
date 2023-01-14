import React from 'react'
import { WorksItem } from '..'
import { Lists } from '../../components'
import { WORKS_DATA } from '../../utils'

const style = {
  display: 'flex'
}

const WorksTimeLine = () => {
  const renderWorkItem = (item) => {
    return <WorksItem item={item} key={item.id} />
  }

  return <Lists data={WORKS_DATA} renderItem={renderWorkItem} styles={style} />
}

export default WorksTimeLine
