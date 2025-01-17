import React from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Room2 = ({onCenterImageClick}) => {
    //wall textures
    const [back, front, top, bottom, left, right] = useTexture([
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s", // Back wall
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s", // Front wall
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s", // Top wall
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s", // Bottom wall
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s", // Left wall
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN5SnFxURJH1ewfhX38y5KQ1cDT_b1-O55A&s"   // right wall
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
  
    const centerImageTexture = useTexture([
      "https://frenchicpaint.co.uk/cdn/shop/articles/Should-Interior-Doors-Be-Painted-the-Same-Colour-as-the-Walls.jpg?v=1638788923&width=1500"
  
   ]);
  
    return (
      <>
      {/* Cube room */}
      <mesh>
        <boxGeometry args={[10, 6, 10]} />
        {materials.map((material, index) => (
          <primitive attach={`material-${index}`} key={index} object={material} />
        ))}
      </mesh>
  
      
      <mesh position={[0, 0, 4.95]} rotation={[0, 0, 0]}  onClick={onCenterImageClick}>
        <planeGeometry args={[4, 3]} />
        <meshBasicMaterial map={centerImageTexture[0]} side={THREE.DoubleSide} />
      </mesh>
  
      <mesh position={[4.95, 0,0]}rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshBasicMaterial map={centerImageTexture[0]} side={THREE.DoubleSide} />
      </mesh>
    </>
    
    );
  };

  export default Room2;
  