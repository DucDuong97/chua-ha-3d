import { Cylinder } from '@react-three/drei'

export function HoBanNguyet({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <group position={position}>
      <Cylinder args={[3, 3, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <meshStandardMaterial color="#4a90a4" transparent opacity={0.7} />
      </Cylinder>
    </group>
  )
}
