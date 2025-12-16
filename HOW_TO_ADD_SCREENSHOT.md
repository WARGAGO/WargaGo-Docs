# Cara Menambahkan Screenshot WARGAGO ke Landing Page

## Langkah-langkah:

### 1. Simpan Gambar Screenshot
- Klik kanan pada gambar screenshot WARGAGO yang Anda miliki
- Pilih "Save Image As..." atau "Simpan Gambar Sebagai..."
- Simpan dengan nama: **wargago-screenshot.png**
- Pastikan formatnya PNG untuk kualitas terbaik

### 2. Letakkan File di Folder yang Benar
Simpan file gambar di lokasi yang sama dengan index.html:
```
C:\Peyimpanan Pribadi\Data D\New folder (2)\Semester 5\WargaGo-Docs\wargago-screenshot.png
```

### 3. Struktur Folder Akhir
```
WargaGo-Docs/
├── index.html
├── styles.css
├── script.js
├── wargago-screenshot.png  ← File gambar screenshot di sini
├── README.md
└── IMAGE_INSTRUCTIONS.txt
```

### 4. Refresh Browser
- Buka index.html di browser
- Tekan Ctrl+F5 untuk hard refresh
- Screenshot WARGAGO akan muncul di mockup phone!

## Alternatif: Jika gambar tidak muncul

Jika gambar tidak muncul, coba langkah berikut:

1. **Periksa nama file** - Pastikan nama file persis: `wargago-screenshot.png` (huruf kecil semua)

2. **Periksa lokasi file** - File harus di folder yang sama dengan index.html

3. **Gunakan path absolut** - Edit index.html baris img src:
   ```html
   <img src="C:/Peyimpanan Pribadi/Data D/New folder (2)/Semester 5/WargaGo-Docs/wargago-screenshot.png" ...>
   ```

4. **Convert gambar** - Jika gambar format lain (jpg, jpeg), ubah nama file di index.html sesuai format:
   ```html
   <img src="wargago-screenshot.jpg" ...>
   ```

## Tips:

- **Ukuran gambar ideal**: 1080 x 2340 pixels (rasio 9:19.5 untuk phone modern)
- **Format terbaik**: PNG untuk kualitas, atau JPG untuk file lebih kecil
- **Kompresi**: Gunakan tools seperti TinyPNG jika file terlalu besar

## Sudah Selesai!

Setelah file gambar disimpan dengan benar, landing page akan otomatis menampilkan screenshot asli aplikasi WARGAGO di mockup phone.

✅ Screenshot akan fit sempurna di dalam frame phone
✅ Kualitas gambar tetap tajam
✅ Responsive di semua ukuran layar
