import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
//import myGLBFile from '../bortnight.glb';

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./bortnight.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};


function Scene (){
  return(
    <Canvas style={{display: 'flex', alignItems: "center", justifyContent:"center"}}>
    
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
    <Model />
    <OrbitControls />
  </Canvas>

  );

}
  
  


export default Scene;

