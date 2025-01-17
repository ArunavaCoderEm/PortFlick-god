import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const Sofa = ({ position }) => {
  const geometryRef = useRef(null);

  if (!geometryRef.current) {
    // Dimensions for sofa components
    const seatWidth = 3;
    const seatHeight = 2;
    const seatDepth = 6;

    const armrestWidth = 3;
    const armrestHeight = 0.8;
    const armrestDepth = 0.5;

    const backrestHeight = 3.5;
    const backrestDepth = 0.1;

    // Create the base seat geometry (main body of the sofa)
    const seatGeometry = new THREE.BoxGeometry(seatWidth, seatHeight, seatDepth);

    // Armrest geometries
    const leftArmrestGeometry = new THREE.BoxGeometry(armrestWidth, armrestHeight, armrestDepth);
    const rightArmrestGeometry = new THREE.BoxGeometry(armrestWidth, armrestHeight, armrestDepth);

    // Create the group for all parts of the sofa
    geometryRef.current = new THREE.Group();

    // Create and position the seat
    const seat = new THREE.Mesh(seatGeometry, new THREE.MeshPhongMaterial({ color: "#afe7e8" }));
    geometryRef.current.add(seat);

    // Create and position the left armrest on the shorter side (depth)
    const leftArmrest = new THREE.Mesh(leftArmrestGeometry, new THREE.MeshPhongMaterial({ color: "#b2dfdc" }));
    leftArmrest.position.set(-(seatWidth  / 20), seatHeight /1.5, seatDepth /2);
    geometryRef.current.add(leftArmrest);

    // Create and position the right armrest on the shorter side (depth)
    const rightArmrest = new THREE.Mesh(rightArmrestGeometry, new THREE.MeshPhongMaterial({ color: "#b2dfdc" }));
    rightArmrest.position.set(-(seatWidth  / 20), seatHeight /1.5, -seatDepth /2);
    geometryRef.current.add(rightArmrest);

    const backrestGeometry = new THREE.BoxGeometry(backrestDepth, backrestHeight, seatDepth);
    const backrest = new THREE.Mesh(backrestGeometry, new THREE.MeshPhongMaterial({ color: "#00887a" }));
    backrest.position.set(-1, seatHeight + backrestHeight / 12, 0);
    geometryRef.current.add(backrest);
  }

  return (
    <group position={position}>
      {geometryRef.current && geometryRef.current.children.map((child, index) => (
        <mesh key={index} geometry={child.geometry} material={child.material} position={child.position} />
      ))}
    </group>
  );
};

export default Sofa;
