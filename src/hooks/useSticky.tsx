import { MutableRefObject, useEffect, useRef, useState } from 'react'

const useSticky = <T extends HTMLDivElement>(): [
  boolean | undefined,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null)
  const [isSticky, setIsSticky] = useState<boolean>(false)

  const set = () => {
    if (ref.current?.offsetHeight) {
      if (window.pageYOffset >= ref.current?.offsetHeight) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
  }

  const useEffectInEvent = (event: 'scroll', useCapture?: boolean) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        set()
        window.addEventListener(event, set, useCapture)
      }, 300)

      return () => {
        window.removeEventListener(event, set, useCapture)
        clearTimeout(timeout)
      }
    }, [])
  }

  useEffectInEvent('scroll', true)

  return [isSticky, ref]
}

export default useSticky
