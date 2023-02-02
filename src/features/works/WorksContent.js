import React from 'react'
import { WorksItem } from '..'
import { Lists } from '../../components'
import { useSizeScreen } from '../../hooks'
import { listsType } from '../../types'

const style = {
  display: 'grid',
  gridColumnGap: '16px',
  gridRowGap: '32px'
}

const WorksContent = ({ works }) => {
  const screen = useSizeScreen()

  const gridColumns = screen.isX || screen.isL || screen.isM ? 2 : 1
  const styleGridColumns = {
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`
  }

  const renderWorkItem = (item) => {
    return <WorksItem item={item} key={item.id} />
  }

  return works.data ? (
    <Lists
      data={works.data}
      renderItem={renderWorkItem}
      styles={{ ...style, ...styleGridColumns }}
    />
  ) : (
    <p>loading data....</p>
  )
}

WorksContent.propTypes = {
  works: listsType.isRequired
}

export default WorksContent
