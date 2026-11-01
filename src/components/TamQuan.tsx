import { Box, Cylinder, Text } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export function TamQuan(props: GroupProps) {
  return (
    <group {...props}>
      {/* Base platform */}
      <Box args={[10, 0.3, 2.5]} position={[0, 0.15, 0]}>
        <meshStandardMaterial color="#7a7a7a" />
      </Box>

      {/* Side pillars (left) */}
      <Box args={[0.5, 4.2, 0.6]} position={[-4.2, 2.1, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>
      <Box args={[0.5, 4.2, 0.6]} position={[-3.2, 2.1, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>

      {/* Left door arch structure */}
      <Box args={[1.4, 3.2, 0.5]} position={[-2.2, 1.6, 0]}>
        <meshStandardMaterial color="#6a6a6a" />
      </Box>
      <Box args={[1.6, 0.4, 0.6]} position={[-2.2, 3.4, 0]}>
        <meshStandardMaterial color="#5a5a5a" />
      </Box>

      {/* Middle (wider) door */}
      <Box args={[2.0, 3.6, 0.5]} position={[0, 1.8, 0]}>
        <meshStandardMaterial color="#6a6a6a" />
      </Box>
      <Box args={[2.2, 0.45, 0.6]} position={[0, 3.8, 0]}>
        <meshStandardMaterial color="#5a5a5a" />
      </Box>

      {/* Right door arch structure */}
      <Box args={[1.4, 3.2, 0.5]} position={[2.2, 1.6, 0]}>
        <meshStandardMaterial color="#6a6a6a" />
      </Box>
      <Box args={[1.6, 0.4, 0.6]} position={[2.2, 3.4, 0]}>
        <meshStandardMaterial color="#5a5a5a" />
      </Box>

      {/* Side pillars (right) */}
      <Box args={[0.5, 4.2, 0.6]} position={[3.2, 2.1, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>
      <Box args={[0.5, 4.2, 0.6]} position={[4.2, 2.1, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>

      {/* Upper level (chồng diêm) */}
      <Box args={[8.5, 1.8, 2.2]} position={[0, 4.5, 0]}>
        <meshStandardMaterial color="#9a9a9a" />
      </Box>

      {/* Upper roof */}
      <Box args={[9.2, 0.35, 2.8]} position={[0, 5.55, 0]}>
        <meshStandardMaterial color="#c45c26" />
      </Box>
      <Box args={[7.5, 0.25, 2.4]} position={[0, 5.85, 0]}>
        <meshStandardMaterial color="#d46c36" />
      </Box>

      {/* Decorative roof ends (simplified dragons / kìm) */}
      <Box args={[0.6, 0.8, 0.6]} position={[-4.6, 5.7, 0]}>
        <meshStandardMaterial color="#b85c26" />
      </Box>
      <Box args={[0.6, 0.8, 0.6]} position={[4.6, 5.7, 0]}>
        <meshStandardMaterial color="#b85c26" />
      </Box>

      {/* Bell placeholder on upper level */}
      <Cylinder args={[0.35, 0.35, 0.8, 16]} position={[0, 5.0, 0.8]}>
        <meshStandardMaterial color="#b8860b" metalness={0.6} roughness={0.3} />
      </Cylinder>

      {/* Side walls */}
      <Box args={[0.3, 3.5, 1.8]} position={[-4.8, 1.75, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>
      <Box args={[0.3, 3.5, 1.8]} position={[4.8, 1.75, 0]}>
        <meshStandardMaterial color="#8a8a8a" />
      </Box>

      <Text position={[0, 6.5, 0]} fontSize={0.35} color="#222" anchorX="center" anchorY="middle">
        Tam Quan — Chùa Hà
      </Text>
    </group>
  )
}
