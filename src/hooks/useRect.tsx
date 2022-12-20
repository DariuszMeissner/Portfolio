import { MutableRefObject, useEffect, useRef, useState } from 'react'

const useRect = <T extends HTMLDivElement>(): [
  DOMRect | undefined,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null)
  const [rect, setRect] = useState<DOMRect>()

  const set = () => setRect(ref.current?.getBoundingClientRect())

  const useEffectInEvent = (
    event: 'resize' | 'scroll',
    useCapture?: boolean
  ) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        set()
        window.addEventListener(event, set, useCapture)
      }, 100)

      return () => {
        window.removeEventListener(event, set, useCapture)
        clearTimeout(timeout)
      }
    }, [])
  }

  useEffectInEvent('resize')
  useEffectInEvent('scroll', true)

  return [rect, ref]
}

export default useRect
