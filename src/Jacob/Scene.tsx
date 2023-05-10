import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements} from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Physics, usePlane, useBox } from '@react-three/cannon'
import * as SkeletonUtils from './util.js';
//import myGLBFile from '../bortnight.glb';
import "./Scene.css";

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  

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
function Bar(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  // useFrame((state, delta) => (ref.current.position.x += delta))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      >
      <boxGeometry args={[2, 0.5, 0.5]} />
      <meshStandardMaterial color={'grey'} />
    </mesh>
  )
}



const Model = (props:ThreeElements['mesh']) => {
  const gltf = useLoader(GLTFLoader, "./bortnight.glb")

  return (
    <>
      <primitive object={SkeletonUtils.clone( gltf.scene )} scale={0.4} {...props}/>
    </>
  );
};

class Person {
  public  x: number;
  public  y: number;
  public z: number;
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const peopleArray = [ new Person(0, 0.25, 0), new Person(1, 0.25, 0)];


function Scene (){
  const [peps] = useState(peopleArray)

  return(
    <Canvas >
    
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Physics>
      <Bar position={[0,0,0]}/>
       ({peps.map((p, i) => (
        <Model key={i} position={[p.x, p.y, p.z]}/>
      ))}) 

      

    </Physics>
    

    <OrbitControls />
  </Canvas>

  );

}
  
  


export default Scene;

