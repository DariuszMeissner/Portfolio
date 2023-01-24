import React, { useEffect, useState } from 'react'
import { WorksItem } from '..'
import { Lists } from '../../components'
import { useSizeScreen } from '../../hooks'

const style = {
  display: 'grid',
  gridColumnGap: '16px',
  gridRowGap: '32px'
}

const WorksContent = () => {
  const [works, setWorks] = useState()
  const screen = useSizeScreen()

  const gridColumns = screen.isX || screen.isL || screen.isM ? 2 : 1
  const styleGridColumns = {
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`
  }

  useEffect(() => {
    const fetchWorksData = async () => {
      let data = await fetch('./data/works.json')
      data = await data.json()
      setWorks(data)
    }

    fetchWorksData()
  }, [])

  const renderWorkItem = (item) => {
    return <WorksItem item={item} key={item.id} />
  }

  return works ? (
    <Lists
      data={works.data}
      renderItem={renderWorkItem}
      styles={{ ...style, ...styleGridColumns }}
    />
  ) : (
    <p>loading data....</p>
  )
}

export default WorksContent
