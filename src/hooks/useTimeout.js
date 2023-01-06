import React, { useEffect } from 'react'

const useTimeout = (callback, delay) => {
  const timeoutRef = React.useRef(null)
  const savedCallback = React.useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()

    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay)
      return () => window.clearTimeout(timeoutRef.current)
    }

    return () => null
  }, [delay])

  return timeoutRef
}

export default useTimeout
