import { useEffect, useState } from 'react'

const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
  const [showElement, setShowElement] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (isMounted && !showElement) {
      setShowElement(true)
    } else if (!isMounted && showElement) {
      timeoutId = setTimeout(() => setShowElement(false), delayTime)
    }

    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime, showElement])
  return showElement
}

export default useDelayUnmount
