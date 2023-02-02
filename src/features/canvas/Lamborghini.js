/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unknown-property */
import React, { useMemo, useState } from 'react'
import { bool, number, func, arrayOf } from 'prop-types'
import * as THREE from 'three'
import { applyProps, useFrame } from '@react-three/fiber'
import { useGLTF, useCursor } from '@react-three/drei'
import { useSizeScreen } from '../../hooks'

/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/

const Lamborghini = ({
  handleCarHover,
  lightsOn,
  zoom,
  lightEmmit,
  rotation,
  scale
}) => {
  const { scene, nodes, materials } = useGLTF('/lambo.glb')
  const [stop, setStop] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const screen = useSizeScreen()

  const v = new THREE.Vector3()

  function setZoomOnScreen() {
    let newZoom
    if (screen.isXS) {
      newZoom = 40
      return newZoom
    }

    if (screen.isS) {
      newZoom = 27
      return newZoom
    }

    return 24
  }

  function setCarHover(value) {
    handleCarHover(value)
    setIsHover(value)
  }

  useCursor(isHover)

  useFrame((state) => {
    if (lightsOn && !stop) {
      const cameraFov = THREE.MathUtils.lerp(
        cameraFov,
        zoom ? setZoomOnScreen() : 42,
        0.05
      )
      state.camera.position.lerp(v.set(zoom ? 24 : 0, 0, zoom ? 0 : 15), 0.07)
      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    }
    if (state.camera.position.x >= 23) {
      setStop(true)
    }
  })

  useMemo(() => {
    // ⬇⬇⬇ All this is probably better fixed in Blender ...
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        // Fix glas, normals look messed up in the original, most likely deformed meshes bc of compression :/
        if (node.name.startsWith('glass')) node.geometry.computeVertexNormals()
      }
    })
    // Fix windows, they have to be inset some more
    nodes.glass_003.scale.setScalar(2.7)
    // Fix inner frame, too light
    applyProps(materials.FrameBlack, {
      metalness: 0.75,
      roughness: 0,
      color: 'black'
    })
    // Wheels, change color from chrome to black matte
    applyProps(materials.Chrome, { metalness: 1, roughness: 0, color: '#333' })
    applyProps(materials.BreakDiscs, {
      metalness: 0.2,
      roughness: 0.2,
      color: '#555'
    })
    applyProps(materials.TiresGum, {
      metalness: 0,
      roughness: 0.4,
      color: '#181818'
    })
    applyProps(materials.GreyElements, { metalness: 0, color: '#292929' })
    // Make front and tail LEDs emit light
    applyProps(materials.emitbrake, {
      emissiveIntensity: lightEmmit,
      toneMapped: false
    })
    applyProps(materials.LightsFrontLed, {
      emissiveIntensity: lightEmmit,
      toneMapped: false
    })
    // Paint, from yellow to black
    nodes.yellow_WhiteCar_0.material = new THREE.MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 0.05,
      color: '#111',
      envMapIntensity: 0.75,
      clearcoatRoughness: 0,
      clearcoat: 1
    })
  }, [
    nodes,
    materials.FrameBlack,
    materials.Chrome,
    materials.BreakDiscs,
    materials.TiresGum,
    materials.GreyElements,
    materials.emitbrake,
    materials.LightsFrontLed,
    lightEmmit
  ])

  return (
    <primitive
      object={scene}
      rotation={rotation}
      scale={scale}
      position={[0, -0.5, -0.2]}
      onPointerOver={() => setCarHover(true)}
      onPointerOut={() => setCarHover(false)}
    />
  )
}

Lamborghini.propTypes = {
  lightEmmit: number.isRequired,
  zoom: bool.isRequired,
  lightsOn: bool.isRequired,
  handleCarHover: func.isRequired,
  scale: number.isRequired,
  rotation: arrayOf(number).isRequired
}

export default Lamborghini
