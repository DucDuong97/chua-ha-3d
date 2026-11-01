import { Box, Text } from '@react-three/drei'

export function TamQuan({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Placeholder: 3 vòm cổng */}
      <Box args={[1.2, 3, 0.4]} position={[-2, 1.5, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>
      <Box args={[1.5, 3.5, 0.4]} position={[0, 1.75, 0]}>
        <meshStandardMaterial color="#9a9a9a" />
      </Box>
      <Box args={[1.2, 3, 0.4]} position={[2, 1.5, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>
      <Text position={[0, 4, 0]} fontSize={0.4} color="#333" anchorX="center">
        Tam Quan
      </Text>
    </group>
  )
}
