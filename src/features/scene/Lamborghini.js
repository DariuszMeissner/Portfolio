/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import * as THREE from 'three'
import { applyProps, useFrame } from '@react-three/fiber'
import { useGLTF, useCursor } from '@react-three/drei'

/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/

const Lamborghini = (props) => {
  const { scene, nodes, materials } = useGLTF('/lambo.glb')
  const [stop, setStop] = useState(false)

  const v = new THREE.Vector3()
  useCursor(props.active)

  useFrame((state) => {
    if (props.lightsOn && !stop) {
      state.camera.fov = THREE.MathUtils.lerp(
        state.camera.fov,
        props.zoom ? 20 : 42,
        0.05
      )
      state.camera.position.lerp(
        v.set(props.zoom ? 24 : 0, props.zoom ? 1 : 0, props.zoom ? 0 : 15),
        0.05
      )
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
      emissiveIntensity: props.lightBackEmmit,
      toneMapped: false
    })
    applyProps(materials.LightsFrontLed, {
      emissiveIntensity: props.lightFrontEmmit,
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
  }, [nodes, materials, props])

  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} {...props} />
}

Lamborghini.propTypes = {
  lightBackEmmit: PropTypes.number.isRequired,
  lightFrontEmmit: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  zoom: PropTypes.bool.isRequired,
  lightsOn: PropTypes.bool.isRequired
}

export default Lamborghini
