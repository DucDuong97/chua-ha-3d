import { Box } from '@react-three/drei'

export function DienMau({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <group position={position}>
      <Box args={[5, 2.5, 3.5]} position={[0, 1.25, 0]}>
        <meshStandardMaterial color="#a85a5a" />
      </Box>
    </group>
  )
}
