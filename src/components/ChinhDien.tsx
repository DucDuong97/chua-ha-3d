import { Box } from '@react-three/drei'

export function ChinhDien({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <group position={position}>
      <Box args={[6, 3, 4]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#d4a574" />
      </Box>
      <Box args={[7, 0.5, 5]} position={[0, 3.25, 0]}>
        <meshStandardMaterial color="#c45c26" />
      </Box>
    </group>
  )
}
