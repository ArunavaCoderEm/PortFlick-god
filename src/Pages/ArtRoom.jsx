import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import NavBar from './Components/Navbar'; 
import Room1 from './Components/Room1'; 
import Sofa from './Components/Sofa';
import Shelf from './Components/Shelf';
import Room2 from './Components/Room2'; 
import { OrbitControls } from "@react-three/drei";

const ArtRoom = () => {
  const [currentRoom, setCurrentRoom] = useState("Room1");
  
  // State to track camera position
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  // Update camera position when changing rooms
  useEffect(() => {
    if (currentRoom === "Room1") {
      setCameraPosition([0, 0, 5]); // Default position
    } else if (currentRoom === "Room2") {
      setCameraPosition([0, 0, 5]); // A new position for Room2, adjust as needed
    }
  }, [currentRoom]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <NavBar />
      <Canvas
        className="w-full h-full"
        camera={{ position: cameraPosition, fov: 65 }} // Use state-based camera position
        
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        
        {currentRoom === "Room1" && <Room1 onCenterImageClick={() => setCurrentRoom("Room2")} />}
        {currentRoom === "Room2" && <Room2 onCenterImageClick={() => setCurrentRoom("Room1")} />}
        
        {currentRoom === "Room1" ? <Sofa position={[-8, -4.5, 0]} /> : <Shelf position={[-9, -1, 0]}/>}
        
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
