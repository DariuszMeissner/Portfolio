import { useEffect, useState } from 'react'

const useImageLoad = (path: string | undefined): [boolean] => {
  const [isImage, setIsImage] = useState<boolean>(false)

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
  }, [])

  return [isImage]
}

export default useImageLoad
