/* eslint-disable react/no-unknown-property */
import React, { useMemo, useState } from 'react'
import { bool, number } from 'prop-types'
import * as THREE from 'three'
import { applyProps, useFrame } from '@react-three/fiber'
import { useGLTF, useCursor } from '@react-three/drei'
import { useSizeScreen } from '../../hooks'
import SETTINGS from '../../utils/settings'

/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/

const Lamborghini = ({ isEngineOn, zoom, lightEmmit, isOverview }) => {
  const { scene, nodes, materials } = useGLTF('/lambo.glb')
  const [stopZoom, setStopZoom] = useState(false)
  const [isCarHover, setIsCarHover] = useState(false)
  const screen = useSizeScreen()

  const v = new THREE.Vector3()

  const valueZoomOnScreenSize = screen.isXS ? 33 : 28
  const valueOfStopZoom = screen.isXS ? 32 : 27

  useCursor(isCarHover)

  function moveCameraWhenLightsOn(state) {
    if (isEngineOn && isOverview && !stopZoom) {
      state.camera.position.lerp(
        v.set(zoom ? valueZoomOnScreenSize : 0, 0, zoom ? 0 : 15),
        0.07
      )
      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    }
  }

  function stopCameraMoving(state) {
    if (state.camera.position.x >= valueOfStopZoom) {
      setStopZoom(true)
    }
  }

  useFrame((state) => {
    moveCameraWhenLightsOn(state)
    stopCameraMoving(state)
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
      scale={SETTINGS.car.scale}
      position={SETTINGS.car.position}
      onPointerOver={() => setIsCarHover(true)}
      onPointerOut={() => setIsCarHover(false)}
    />
  )
}

Lamborghini.propTypes = {
  lightEmmit: number.isRequired,
  zoom: bool.isRequired,
  isEngineOn: bool.isRequired,
  isOverview: bool.isRequired
}

export default Lamborghini
