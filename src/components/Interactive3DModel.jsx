import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// Preload the GLTF for faster load
useGLTF.preload("/models/MyModel.gltf");

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) modelRef.current.rotation.y += 0.002; // slow rotation
  });
  return <primitive ref={modelRef} object={scene} scale={0.8} />; // good default scale
}

export default function Interactive3DModel({ modelUrl }) {
  return (
    <div
      style={{
        width: "100%",          // full width
        maxWidth: "800px",      // optional max width
        height: "60vh",         // responsive height
        margin: "2rem auto",    // center horizontally
        position: "relative",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%", background: "transparent" }}
        gl={{ alpha: true }}
        dpr={[1, 2]}             // better on high DPI
        camera={{ position: [0, 1, 7], fov: 60 }} // adjust FOV & distance
      >
        {/* Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} />

        {/* Environment for realistic colors */}
        <Environment preset="sunset" />

        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>

        {/* Only horizontal rotation */}
        <OrbitControls
          enableZoom={false}

        />
      </Canvas>
    </div>
  );
}
