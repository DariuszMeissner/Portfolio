import { useCallback, useEffect, useState } from 'react'
import { BREAKPOINTS } from '../utils'

const ORIENTATION_MIN_BREAKPOINT = 1.2

const useSizeScreen = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    orientation: 'none',
    currentSize: 'none',
    isXS: false,
    isS: false,
    isM: false,
    isL: false,
    isX: false
  })

  const handleResize = useCallback(() => {
    const { innerWidth, innerHeight } = window

    let currSize = 'XS'

    if (innerWidth <= BREAKPOINTS.XS) {
      currSize = 'XS'
    } else if (innerWidth >= BREAKPOINTS.S && innerWidth < BREAKPOINTS.M) {
      currSize = 'S'
    } else if (innerWidth >= BREAKPOINTS.M && innerWidth < BREAKPOINTS.L) {
      currSize = 'M'
    } else if (innerWidth >= BREAKPOINTS.L && innerWidth < BREAKPOINTS.X) {
      currSize = 'L'
    } else if (innerWidth >= BREAKPOINTS.X) {
      currSize = 'X'
    }

    let orientation = 'none'
    if (innerWidth > innerHeight * ORIENTATION_MIN_BREAKPOINT) {
      orientation = 'landscape'
    } else if (innerHeight > innerWidth * ORIENTATION_MIN_BREAKPOINT) {
      orientation = 'portrait'
    }
    setSize({
      width: innerWidth,
      height: innerHeight,
      currentSize: currSize,
      orientation,
      isXS: currSize === 'XS',
      isS: currSize === 'S',
      isM: currSize === 'M',
      isL: currSize === 'L',
      isX: currSize === 'X'
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize, true)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return size
}

export default useSizeScreen
