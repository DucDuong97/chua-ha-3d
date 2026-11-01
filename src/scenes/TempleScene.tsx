import { TamQuan } from '../components/TamQuan'
import { HoBanNguyet } from '../components/HoBanNguyet'
import { ChinhDien } from '../components/ChinhDien'
import { DienMau } from '../components/DienMau'

export function TempleScene() {
  return (
    <group>
      {/* Trục chính: Tam Quan → hồ + cây → sân → chính điện → Điện Mẫu */}
      <TamQuan position={[0, 0, 0]} />
      <HoBanNguyet position={[0, 0, -8]} />
      <ChinhDien position={[0, 0, -16]} />
      <DienMau position={[0, 0, -24]} />
    </group>
  )
}
