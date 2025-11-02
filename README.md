# React Tourist Attraction Mini Project
<img width="1919" height="1079" alt="travel-card" src="https://github.com/user-attachments/assets/e5f88f99-3f3a-4a5d-a41e-ec206b59fa5b" />

โปรเจกต์ค้นหาสถานที่ท่องเที่ยวที่สร้างด้วย React และ Express.js

## โครงสร้างโปรเจกต์

- `client/` - React frontend (ใช้ Vite)
- `server/` - Express.js backend API

## การติดตั้ง

### 1. ติดตั้ง Dependencies

```bash
# ติดตั้ง dependencies สำหรับ client
cd client
npm install

# ติดตั้ง dependencies สำหรับ server
cd ../server
npm install
```

### 2. ตั้งค่า Environment Variables

สร้างไฟล์ `.env` ในโฟลเดอร์ `client/`:

```env
VITE_API_BASE_URL=http://localhost:4001
```

## การรันโปรเจกต์

### เริ่ม Server (Backend)

```bash
cd server
npm start
```

**หมายเหตุ:** ครั้งแรกตอนรอ server นานหน่อย ประมาณ 5 วินาที หลังจากนั้น server จะรันที่ `http://localhost:4001`

### เริ่ม Client (Frontend)

เปิด terminal ใหม่:

```bash
cd client
npm run dev
```

Client จะรันที่ `http://localhost:5173` (หรือพอร์ตอื่นที่ Vite กำหนด)

## ฟีเจอร์

- ค้นหาสถานที่ท่องเที่ยวตามคำค้นหา
- ค้นหาได้จากชื่อสถานที่, คำอธิบาย, และแท็ก
- คลิกที่แท็กเพื่อเพิ่มคำค้นหา

## API Endpoints

- `GET /trips?keywords=<คำค้นหา>` - ค้นหาสถานที่ท่องเที่ยวตาม keywords

## เทคโนโลยีที่ใช้

### Frontend
- React 18
- Vite
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Express.js
- Node.js
- CORS
- Body Parser
