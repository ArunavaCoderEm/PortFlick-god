import React, { useRef } from "react";
import * as THREE from "three";

const Shelf = ({ position }) => {
  const geometryRef = useRef(null);

  if (!geometryRef.current) {
    // Dimensions for shelf components
    const shelfWidth = 5;
    const shelfHeight = 0.2;
    const shelfDepth = 1;

    const rackHeight = 0.2;
    const rackDepth = 0.4;

    // Create the group for all parts of the shelf
    geometryRef.current = new THREE.Group();

    // Create and position the first rack
    const firstRackGeometry = new THREE.BoxGeometry(rackHeight, shelfDepth, shelfWidth); // Rotated rack
    const firstRack = new THREE.Mesh(firstRackGeometry, new THREE.MeshPhongMaterial({ color: "#8b4513" }));
    firstRack.position.set(0, 0, 0);
    firstRack.rotation.z = Math.PI / 2; // Rotate 90 degrees
    geometryRef.current.add(firstRack);

    // Create and position the second rack (middle rack)
    const secondRackGeometry = new THREE.BoxGeometry(rackHeight, shelfDepth, shelfWidth); // Rotated rack
    const secondRack = new THREE.Mesh(secondRackGeometry, new THREE.MeshPhongMaterial({ color: "#deb887" }));
    secondRack.position.set(0, shelfHeight + 1.5, 0); // Offset vertically to create the 'S' pattern
    secondRack.rotation.z = Math.PI / 2; // Rotate 90 degrees
    geometryRef.current.add(secondRack);

    // Create and position the third rack (top rack)
    const thirdRackGeometry = new THREE.BoxGeometry(rackHeight, shelfDepth, shelfWidth); // Rotated rack
    const thirdRack = new THREE.Mesh(thirdRackGeometry, new THREE.MeshPhongMaterial({ color: "#8b4513" }));
    thirdRack.position.set(0, 2 * (shelfHeight + 1.5), 0); // Offset vertically
    thirdRack.rotation.z = Math.PI / 2; // Rotate 90 degrees
    geometryRef.current.add(thirdRack);

    // Create supports from the first to the second rack (left side)
    const leftSupportGeometry = new THREE.BoxGeometry(1.5, shelfDepth, 0.2);
    const leftSupport = new THREE.Mesh(leftSupportGeometry, new THREE.MeshPhongMaterial({ color: "#a52a2a" }));
    leftSupport.position.set(0, shelfHeight * 1.5 + 2.25, -2.4);
    leftSupport.rotation.z = Math.PI / 2; // Rotate 90 degrees
    geometryRef.current.add(leftSupport);

    // Create supports from the second to the third rack (right side)
    const rightSupportGeometry = new THREE.BoxGeometry(1.5, shelfDepth, 0.2);
    const rightSupport = new THREE.Mesh(rightSupportGeometry, new THREE.MeshPhongMaterial({ color: "#a52a2a" }));
    rightSupport.position.set(0, shelfHeight * 1.5 +0.55, 2.4);
    rightSupport.rotation.z = Math.PI / 2; // Rotate 90 degrees
    geometryRef.current.add(rightSupport);
  }

  return (
    <group position={position}>
      {geometryRef.current && geometryRef.current.children.map((child, index) => (
        <mesh key={index} geometry={child.geometry} material={child.material} position={child.position} rotation={child.rotation} />
      ))}
    </group>
  );
};

export default Shelf;
