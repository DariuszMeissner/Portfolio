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
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[0.2, -1.9, 4.5]}
        rotation={[0, 18.9, 0]}>
        {TECH_STACK_LIST.rwd}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[1.6, -1.9, 4.2]}
        rotation={[0, 19.25, 0]}>
        {TECH_STACK_LIST.sass}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[2.9, -1.9, 3.5]}
        rotation={[0, 19.6, 0]}>
        {TECH_STACK_LIST.css}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[3.8, -1.9, 2.5]}
        rotation={[0, 20, 0]}>
        {TECH_STACK_LIST.html}
        <meshNormalMaterial />
      </Text3D>
      {/* center */}
      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[4.5, -1.9, 1.1]}
        rotation={[0, 20.4, 0]}>
        SWIPE LAMBORGHINI
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[4.05, -1.9, -2]}
        rotation={[0, 20.9, 0]}>
        {TECH_STACK_LIST.react}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[3.4, -1.9, -3]}
        rotation={[0, 21.3, 0]}>
        {TECH_STACK_LIST.typescript}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[2.1, -1.9, -4]}
        rotation={[0, 21.6, 0]}>
        {TECH_STACK_LIST.javascript}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[0.6, -1.9, -4.5]}
        rotation={[0, 22, 0]}>
        {TECH_STACK_LIST.redux}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[-0.6, -1.9, -4.5]}
        rotation={[0, 22.25, 0]}>
        {TECH_STACK_LIST.proptypes}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[-2.3, -1.9, -4]}
        rotation={[0, 22.7, 0]}>
        {TECH_STACK_LIST.contextApi}
        <meshNormalMaterial />
      </Text3D>

      <Text3D
        font="./fonts/Open Sans_Regular.json"
        scale={0.16}
        position={[-3.6, -1.9, -2.8]}
        rotation={[0, 23.1, 0]}>
        {TECH_STACK_LIST.reactRouter}
        <meshNormalMaterial />
      </Text3D>
    </>
  )
}

export default TechStackList
