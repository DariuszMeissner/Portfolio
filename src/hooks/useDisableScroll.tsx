import React, { useCallback } from 'react'

const useDisableScroll = () => {
  const lockScroll = useCallback(() => {
    const scrollValue = window.scrollY
    document.body.style.top = `-${scrollValue}px`
    document.body.style.position = 'static'
    document.body.style.overflow = 'hidden'
    document.body.style.width = '100%'
    document.body.style.height = '100%'

    // ios
    document.body.style.touchAction = 'none'
  }, [])

  const unlockScroll = React.useCallback(() => {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.overflow = ''
    document.body.style.top = ''
    document.body.style.width = ''

    // ios
    document.body.style.touchAction = ''

    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
  }, [])

  return {
    lockScroll,
    unlockScroll
  }
}

export default useDisableScroll
