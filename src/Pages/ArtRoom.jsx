import React from "react";
import { Canvas } from "@react-three/fiber";
import NavBar from './Components/Navbar'; 
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Room = () => {
  //wall textures
  const [back, front, top, bottom, left, right] = useTexture([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s", // Back wall
    "https://images.unsplash.com/photo-1496268280706-ec91c5e133c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Front wall
    "https://www.shutterstock.com/image-vector/white-suspended-cassette-plasterboard-ceiling-600nw-2114128787.jpg", // Top wall
    "https://www.shutterstock.com/image-vector/white-suspended-cassette-plasterboard-ceiling-600nw-2114128787.jpg", // Bottom wall
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s", // Left wall
    "https://frenchicpaint.co.uk/cdn/shop/articles/Should-Interior-Doors-Be-Painted-the-Same-Colour-as-the-Walls.jpg?v=1638788923&width=1500"   // right wall
    ]);

    [back, front, top, bottom, left, right].forEach((texture) => {
      texture.wrapS = THREE.RepeatWrapping; // Ensure wrapping works
      texture.repeat.x = -1; // Flip horizontally
    });
  
  const materials = [
    new THREE.MeshBasicMaterial({ map: back, side: THREE.BackSide }),   // Back Wall
    new THREE.MeshBasicMaterial({ map: front, side: THREE.BackSide }),  // Front Wall
    new THREE.MeshBasicMaterial({ map: top, side: THREE.BackSide }),    // Top Wall
    new THREE.MeshBasicMaterial({ map: bottom, side: THREE.BackSide }), // Bottom Wall
    new THREE.MeshBasicMaterial({ map: left, side: THREE.BackSide }),   // Left Wall
    new THREE.MeshBasicMaterial({ map: right, side: THREE.BackSide }),  // Right Wall
  ];

  const centerImageTexture = useTexture(
    "https://frenchicpaint.co.uk/cdn/shop/articles/Should-Interior-Doors-Be-Painted-the-Same-Colour-as-the-Walls.jpg?v=1638788923&width=1500"
  );

  return (
    <>
    {/* Cube room */}
    <mesh>
      <boxGeometry args={[10, 6, 10]} />
      {materials.map((material, index) => (
        <primitive attach={`material-${index}`} key={index} object={material} />
      ))}
    </mesh>

    
    <mesh position={[0, 0, 4.95]} rotation={[0, 0, 0]}>
      <planeGeometry args={[4, 3]} />
      <meshBasicMaterial map={centerImageTexture} side={THREE.DoubleSide} />
    </mesh>

    <mesh position={[4.95, 0,0]}rotation={[0, -Math.PI / 2, 0]}>
      <planeGeometry args={[4, 3]} />
      <meshBasicMaterial map={centerImageTexture} side={THREE.DoubleSide} />
    </mesh>
  </>
  
  );
};

const ArtRoom = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
       <NavBar/>
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 65 }} // Adjusted position for better viewing
      >
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        {/* Room */}
        <Room />
        {/* Controls */}
        <OrbitControls
          enableZoom={false} // Allow zoom for better navigation
          minPolarAngle={Math.PI / 3} // Restrict downward rotation
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
    </div>
  );
};

export default ArtRoom;
