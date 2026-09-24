import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Project } from "@/data/red-ant";

function CameraDrift() {
  useFrame(({ camera, pointer }, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    const target = new THREE.Vector3(pointer.x * 0.8, pointer.y * 0.45 + 1, 8.5);
    camera.position.lerp(target, 1 - Math.exp(-2.2 * dt));
    camera.lookAt(0, 0.2, 0);
  });
  return null;
}

function ArchitecturalForm({ morph = false }: { morph?: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    if (!group.current) return;
    group.current.rotation.y += dt * 0.045;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.35) * 0.08;
  });
  const pieces = useMemo(() => [
    { p: [-1.5, 0, 0] as const, s: [2.8, .45, 2] as const, r: [0, .2, .05] as const },
    { p: [.8, 1.1, -.4] as const, s: [3.4, .34, 1.25] as const, r: [.08, -.45, 0] as const },
    { p: [.25, -.8, .6] as const, s: [.55, 3.4, .65] as const, r: [0, .55, -.08] as const },
    { p: [-.6, .2, 1] as const, s: [1.1, 1.4, .18] as const, r: [0, -.6, 0] as const },
  ], []);
  return (
    <group ref={group} rotation={[.12, -.35, 0]}>
      {pieces.map((piece, i) => (
        <mesh key={i} position={piece.p} scale={piece.s} rotation={piece.r} castShadow receiveShadow>
          <boxGeometry />
          <meshStandardMaterial color={i === 3 ? "#e3261e" : i === 1 ? "#77736d" : "#353432"} roughness={i === 1 ? .35 : .82} metalness={i === 1 ? .35 : .04} emissive={i === 3 ? "#5b0805" : "#000000"} />
        </mesh>
      ))}
      <mesh position={[.5, .15, -.2]} rotation={[0, .35, 0]}>
        <boxGeometry args={[1.5, 2.6, .08]} />
        <meshPhysicalMaterial color="#a8b1b1" transparent opacity={.28} roughness={.05} transmission={.35} />
      </mesh>
      {morph && <mesh position={[0, 0, -.8]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[2.1, .12, 16, 72]} /><meshStandardMaterial color="#e3261e" emissive="#8a0c08" emissiveIntensity={.7} /></mesh>}
    </group>
  );
}

export function ArchitecturalCanvas({ morph = false }: { morph?: boolean }) {
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 1, 8.5], fov: 40 }} gl={{ antialias: true }}>
      <color attach="background" args={["#080808"]} />
      <ambientLight intensity={.55} />
      <directionalLight position={[5, 8, 5]} intensity={3} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-4, -1, 3]} intensity={12} color="#e3261e" distance={10} />
      <ArchitecturalForm morph={morph} />
      <Environment resolution={64}><Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} /><Lightformer intensity={1} color="#d4d0c8" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} /></Environment>
      <CameraDrift />
    </Canvas>
  );
}

type GlobeProps = { projects: Project[]; onHover: (project: Project | null) => void };

function Globe({ projects, onHover }: GlobeProps) {
  const group = useRef<THREE.Group>(null);
  const coords = [[25.2, 55.3], [1.35, 103.8], [41.4, 2.17], [55.7, 12.6], [24.7, 46.7], [-37.8, 145], [19.1, 72.9]];
  useFrame((_, rawDelta) => { if (group.current) group.current.rotation.y += Math.min(rawDelta, .05) * .045; });
  return <group ref={group} rotation={[0, -.4, 0]}>
    <mesh><sphereGeometry args={[2.5, 48, 48]} /><meshStandardMaterial color="#171717" roughness={.72} metalness={.22} wireframe /></mesh>
    {coords.map((coord, i) => {
      const lat = coord[0] ?? 0;
      const lon = coord[1] ?? 0;
      const project = projects[i];
      if (!project) return null;
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lon + 180) * Math.PI / 180;
      const r = 2.55;
      const p: [number, number, number] = [-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)];
      return <mesh key={project.name} position={p} onPointerOver={(e) => { e.stopPropagation(); onHover(project); }} onPointerOut={() => onHover(null)}>
        <sphereGeometry args={[.075, 12, 12]} /><meshStandardMaterial color="#e3261e" emissive="#e3261e" emissiveIntensity={2} />
      </mesh>;
    })}
  </group>;
}

export function GlobeCanvas(props: GlobeProps) {
  return <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 7], fov: 42 }}><color attach="background" args={["#080808"]} /><ambientLight intensity={1.2} /><directionalLight position={[4, 5, 6]} intensity={2} /><Globe {...props} /><CameraDrift /></Canvas>;
}