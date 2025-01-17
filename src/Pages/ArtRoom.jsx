import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import NavBar from './Components/Navbar'; 
import Room1 from './Components/Room1'; 
import Sofa from './Components/Sofa';
import Shelf from './Components/Shelf';
import Room2 from './Components/Room2'; 
import { OrbitControls, useTexture } from "@react-three/drei";


const ArtRoom = () => {
  const [currentRoom, setCurrentRoom] = useState("Room1");
  return (
    <div className="w-screen h-screen overflow-hidden">
      <NavBar/>
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 65 }} // Adjusted position for better viewing
      >
        
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
      
        {currentRoom === "Room1" && <Room1 onCenterImageClick={() => setCurrentRoom("Room2")} />}
        {currentRoom === "Room2" && <Room2 onCenterImageClick={() => setCurrentRoom("Room1")}/>}
        
        {currentRoom === "Room1"? <Sofa position={[-4, -2.5, 0]} /> : <Shelf position={[-4, -2.5, 0]} />}

        

        
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
    </div>
  );
};

export default ArtRoom;
