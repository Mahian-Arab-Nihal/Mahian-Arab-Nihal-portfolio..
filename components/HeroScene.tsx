"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function FabricKnot({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state: RootState) => {
    if (!meshRef.current) return;
    target.current.x = state.pointer.y * 0.3;
    target.current.y = state.pointer.x * 0.4;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      target.current.x + scrollProgress.current * 2.2,
      0.06
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      target.current.y + state.clock.elapsedTime * 0.08,
      0.06
    );

    const scale = 1 + scrollProgress.current * 0.35;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.15, 0.34, 220, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#FF4B2B"
          roughness={0.15}
          metalness={0.65}
          distort={0.32}
          speed={1.6}
          emissive="#7a1a0a"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state: RootState) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#C9A86A" transparent opacity={0.5} />
    </points>
  );
}

export default function HeroScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 3, 4]} intensity={1.4} color="#FF7A54" />
        <pointLight position={[-4, -2, -3]} intensity={0.8} color="#C9A86A" />
        <FabricKnot scrollProgress={scrollProgress} />
        <Particles />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
