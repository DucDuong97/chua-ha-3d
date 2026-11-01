import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { TempleScene } from './scenes/TempleScene'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a1a' }}>
      <Canvas camera={{ position: [10, 5, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 5]} intensity={1} castShadow />
        <TempleScene />
        <OrbitControls makeDefault />
        <Environment preset="park" />
      </Canvas>
    </div>
  )
}
