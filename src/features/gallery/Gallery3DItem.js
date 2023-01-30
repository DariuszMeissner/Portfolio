/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useCursor, Image, Html, Text3D, Center, Text } from '@react-three/drei'
import getUuid from 'uuid-by-string'
import { bool, func } from 'prop-types'
import { worksItemType } from '../../types'

const Gallery3DItem = ({
  item,
  setIsModalOpen,
  setDataProject,
  setIsWorksPage,
  isZoomGallery
}) => {
  const [isHover, setIsHover] = useState(false)
  const name = getUuid(item.thumbnail)

  const colorMap = useLoader(TextureLoader, item.thumbnail)

  const setScaleOnHover =
    isHover && !isZoomGallery ? [4.4, 2.6, 0.1] : [4.3, 2.5, 0.1]

  function onPointerOver(e) {
    e.stopPropagation()
    setIsHover(true)
  }

  function openModal() {
    setIsModalOpen(true)
    setIsWorksPage(true)
    setDataProject(item)
  }

  useCursor(isHover)

  return (
    <group position={item.position} rotation={item.rotation}>
      <mesh
        name={name}
        onPointerOver={(e) => onPointerOver(e)}
        onPointerOut={() => setIsHover(false)}
        scale={setScaleOnHover}
        position={[0, 3 / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial map={colorMap} />

        <Center position={[0, -0.58, 0]}>
          <Text3D font="./fonts/Open Sans_Regular.json" size={0.05}>
            {item.title}
            <meshStandardMaterial color="white" />
          </Text3D>
        </Center>

        {isZoomGallery && (
          <Html transform zIndexRange={1} position={[0, 0, 0]}>
            <button
              onClick={() => openModal()}
              type="button"
              style={{
                fontSize: 1.8,
                cursor: 'pointer',
                border: 'none',
                padding: 2
              }}>
              See more
            </button>
          </Html>
        )}

        {isHover && !isZoomGallery && (
          <Html transform zIndexRange={1} position={[0, 0, 0]}>
            <div style={{ fontSize: 4, cursor: 'pointer', border: 'none' }}>
              Click to zoom
            </div>
          </Html>
        )}
      </mesh>
    </group>
  )
}

Gallery3DItem.propTypes = {
  item: worksItemType.isRequired,
  setIsModalOpen: func.isRequired,
  setDataProject: func.isRequired,
  setIsWorksPage: func.isRequired,
  isZoomGallery: bool.isRequired
}

export default Gallery3DItem
