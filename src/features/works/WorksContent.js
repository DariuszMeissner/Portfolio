import React, { useContext } from 'react'
import { WorksItem } from '..'
import { Lists } from '../../components'
import SceneContext from '../../context/SceneContext'
import { useSizeScreen } from '../../hooks'

const style = {
  display: 'grid',
  gridColumnGap: '16px',
  gridRowGap: '32px'
}

const WorksContent = () => {
  const { scene } = useContext(SceneContext)
  const screen = useSizeScreen()

  const gridColumns = screen.isX || screen.isL || screen.isM ? 2 : 1
  const styleGridColumns = {
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`
  }

  const renderWorkItem = (item) => {
    return <WorksItem item={item} key={item.id} />
  }

  return scene.works ? (
    <Lists
      data={scene.works.data}
      renderItem={renderWorkItem}
      styles={{ ...style, ...styleGridColumns }}
    />
  ) : (
    <p>loading data....</p>
  )
}

export default WorksContent
