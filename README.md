# Chùa Hà 3D — Lễ chùa online

Dự án thế giới 3D trên browser cho phép visitor xắp lễ và đi lại quanh Chùa Hà (Cầu Giấy, Hà Nội) để hành hương.

## Stack

- Vite + React + TypeScript
- Three.js + React Three Fiber + Drei

## Cấu trúc

```
src/
  components/     # Các thành phần 3D (TamQuan, HoBanNguyet, ChinhDien, DienMau, Offerings...)
  scenes/         # Scene chính
  hooks/          # Custom hooks (camera controls, offerings state...)
  assets/         # Models, textures, reference images
  App.tsx
  main.tsx
```

## Chạy local

```bash
npm install
npm run dev
```

## Notion

Tài liệu reference đang được thu thập tại Notion page của dự án.
