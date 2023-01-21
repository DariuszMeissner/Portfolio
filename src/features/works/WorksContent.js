import React from 'react'
import { WorksItem } from '..'
import { Lists } from '../../components'
import { useSizeScreen } from '../../hooks'
import { WORKS_DATA } from '../../utils'

const WorksContent = () => {
  const screen = useSizeScreen()

  const gridColumns = screen.isX || screen.isL || screen.isM ? 2 : 1

  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gridColumnGap: '16px',
    gridRowGap: '32px'
  }

  const renderWorkItem = (item) => {
    return <WorksItem item={item} key={item.id} />
  }

  return <Lists data={WORKS_DATA} renderItem={renderWorkItem} styles={style} />
}

export default WorksContent
