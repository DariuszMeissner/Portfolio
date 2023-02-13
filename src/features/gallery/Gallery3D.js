/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useLocation, useRoute } from 'wouter'
import { func, bool } from 'prop-types'
import { listsType } from '../../types'
import Gallery3DItem from './Gallery3DItem'
import SETTINGS from '../../utils/settings'

const Gallery3D = ({
  setDataProject,
  works,
  openModal,
  openPageWorks,
  isZoomGallery,
  setZoomGalleryOff,
  setZoomGalleryOn
}) => {
  const groupRef = useRef(null)
  const clickedRef = useRef(null)
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  const [startUseFrame, setStartUseFrame] = useState(false)
  const [isMainView, setIsMainView] = useState(true)
  const [isShowed, setIsShowed] = useState(true)

  const q = useMemo(() => {
    return new THREE.Quaternion()
  }, [])

  const p = useMemo(() => {
    return new THREE.Vector3()
  }, [])

  function onClickOnProject(e) {
    e.stopPropagation()
    setLocation(
      clickedRef.current === e.object ? '/' : `/item/${e.object.name}`
    )
    setStartUseFrame(true)
    setZoomGalleryOn()
  }

  function hideGallery3DWhenBehind(param) {
    if (param.camera.position.x <= 3.1) {
      setIsShowed(false)
    } else {
      setIsShowed(true)
    }
  }

  useEffect(() => {
    if (params) {
      clickedRef.current = groupRef.current.getObjectByName(params?.id)
    }

    if (clickedRef.current && params) {
      clickedRef.current.parent.updateWorldMatrix(true, true)
      clickedRef.current.parent.localToWorld(p.set(0, 3 / 2, 14))
      clickedRef.current.parent.getWorldQuaternion(q)
      setIsMainView(false)
    } else {
      setIsMainView(true)
      p.set(0, 2, 28)
      q.identity()
    }
  }, [params, p, q])

  function zoomIn(state, dt) {
    if (clickedRef.current && startUseFrame && !isMainView) {
      state.camera.position.lerp(p, 0.4, dt)
      state.camera.quaternion.slerp(q, 0.4, dt)
    }
  }

  function zoomOut(state) {
    if (clickedRef.current && startUseFrame && isMainView) {
      state.camera.position.lerp(p.set(28, 2, 0), 1)

      clickedRef.current = null
      setZoomGalleryOff()
    }
  }

  useFrame((state, dt) => {
    zoomIn(state, dt)
    zoomOut(state)
    hideGallery3DWhenBehind(state)
  })

  return isShowed ? (
    <group
      ref={groupRef}
      position={SETTINGS.gallery3D.position}
      rotation={SETTINGS.gallery3D.rotation}
      onClick={(e) => onClickOnProject(e)}
      onPointerMissed={() => setLocation('/')}>
      {works.data.map((item) => (
        <Gallery3DItem
          key={item.id}
          item={item}
          openModal={openModal}
          setDataProject={setDataProject}
          openPageWorks={openPageWorks}
          isZoomGallery={isZoomGallery}
        />
      ))}
    </group>
  ) : null
}

Gallery3D.propTypes = {
  works: listsType.isRequired,
  setDataProject: func.isRequired,
  openModal: func.isRequired,
  openPageWorks: func.isRequired,
  isZoomGallery: bool.isRequired,
  setZoomGalleryOff: func.isRequired,
  setZoomGalleryOn: func.isRequired
}

export default Gallery3D
