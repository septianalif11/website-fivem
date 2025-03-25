# GTA 5 RP Server Website

Website modern untuk server GTA 5 Roleplay menggunakan React, Tailwind CSS, dan Vite.

## Fitur

- 🎮 Informasi status server real-time
- 👥 Manajemen karakter
- 📜 Peraturan server
- 📊 Statistik pemain
- 📱 Responsif untuk semua ukuran layar

## Teknologi yang Digunakan

- React 18
- Tailwind CSS
- Vite
- React Router DOM
- Heroicons

## Memulai

### Prasyarat

- Node.js 16+ 
- npm atau yarn

### Instalasi

1. Clone repositori
```bash
git clone https://github.com/yourusername/gta5-rp-server.git
cd gta5-rp-server
```

2. Install dependensi
```bash
npm install
# atau
yarn install
```

3. Jalankan server development
```bash
npm run dev
# atau
yarn dev
```

4. Buka browser dan akses `http://localhost:3000`

### Build untuk Production

```bash
npm run build
# atau
yarn build
```

## Struktur Proyek

```
gta5-rp-server/
├── src/
│   ├── components/     # Komponen React yang dapat digunakan kembali
│   ├── pages/         # Halaman-halaman utama
│   ├── App.jsx        # Komponen utama
│   ├── main.jsx       # Entry point
│   └── index.css      # Style global
├── public/            # Asset statis
├── index.html         # HTML template
└── package.json       # Dependensi dan script
```

## Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk diskusi fitur baru.

## Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut. 