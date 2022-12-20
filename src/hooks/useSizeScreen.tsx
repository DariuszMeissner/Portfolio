import { useCallback, useEffect, useState } from 'react'
import BREAKPOINTS from '../util/brekpoints'

interface ISize {
  width: number
  height: number
  orientation: string
  currentSize: string
  isS: boolean
  isM: boolean
  isL: boolean
  isX: boolean
}

const ORIENTATION_MIN_BREAKPOINT = 1.2

const useSizeScreen = (): ISize => {
  const [size, setSize] = useState<ISize>({
    width: 0,
    height: 0,
    orientation: 'none',
    currentSize: 'none',
    isS: false,
    isM: false,
    isL: false,
    isX: false
  })

  const handleResize = useCallback(() => {
    const { innerWidth, innerHeight } = window

    let currSize = 'S'
    if (innerWidth <= BREAKPOINTS.S) {
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
      isS: currSize === 'S',
      isM: currSize === 'M',
      isL: currSize === 'L',
      isX: currSize === 'X'
    })
  }, [size])

  useEffect(() => {
    window.addEventListener('resize', handleResize, true)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return size
}

export default useSizeScreen
