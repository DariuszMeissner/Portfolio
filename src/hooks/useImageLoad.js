import { useEffect, useState } from 'react'

const useImageLoad = (path) => {
  const [isImage, setIsImage] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setIsImage(true)
    }
    img.onerror = () => {
      setIsImage(false)
    }

    if (path) {
      img.src = path
    }
  }, [path])

  return [isImage]
}

export default useImageLoad
