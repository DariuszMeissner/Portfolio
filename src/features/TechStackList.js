/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Text3D } from '@react-three/drei'
import { TECH_STACK_LIST } from '../utils'

const TechStackList = () => {
  return (
    <>
      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[-1.2, -1.9, 4.35]}
        rotation={[0, 18.6, 0]}>
        {TECH_STACK_LIST.bem}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[0.2, -1.9, 4.5]}
        rotation={[0, 18.9, 0]}>
        {TECH_STACK_LIST.rwd}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[1.6, -1.9, 4.2]}
        rotation={[0, 19.25, 0]}>
        {TECH_STACK_LIST.sass}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[2.9, -1.9, 3.5]}
        rotation={[0, 19.6, 0]}>
        {TECH_STACK_LIST.css}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[3.8, -1.9, 2.5]}
        rotation={[0, 20, 0]}>
        {TECH_STACK_LIST.html}
        <meshStandardMaterial color="white" />
      </Text3D>
      {/* center */}
      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[4.5, -1.9, 0.5]}
        rotation={[0, 20.4, 0]}>
        SWIPE CAR
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[4.05, -1.9, -2]}
        rotation={[0, 20.9, 0]}>
        {TECH_STACK_LIST.react}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[3.4, -1.9, -3]}
        rotation={[0, 21.3, 0]}>
        {TECH_STACK_LIST.typescript}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[2.1, -1.9, -4]}
        rotation={[0, 21.6, 0]}>
        {TECH_STACK_LIST.javascript}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[0.6, -1.9, -4.5]}
        rotation={[0, 22, 0]}>
        {TECH_STACK_LIST.redux}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[-0.6, -1.9, -4.5]}
        rotation={[0, 22.25, 0]}>
        {TECH_STACK_LIST.contextApi}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[-2.3, -1.9, -4]}
        rotation={[0, 22.7, 0]}>
        {TECH_STACK_LIST.reactRouter}
        <meshStandardMaterial color="white" />
      </Text3D>
    </>
  )
}

export default TechStackList
