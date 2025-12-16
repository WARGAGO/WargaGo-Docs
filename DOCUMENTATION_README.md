# WARGAGO - Dokumentasi Lengkap

## 📁 Struktur Dokumentasi

```
WargaGo-Docs/
├── index.html              # Landing page utama
├── styles.css              # Styling utama
├── script.js               # JavaScript landing page
├── wargago-logo.png        # Logo aplikasi
├── wargago-screenshot.png  # Screenshot aplikasi
├── docs/                   # Folder dokumentasi
│   ├── index.html          # Halaman dokumentasi utama
│   ├── docs-styles.css     # Styling khusus dokumentasi
│   └── docs-script.js      # JavaScript dokumentasi
├── COLOR_GUIDE.md          # Panduan warna (#1D4ED8)
├── QUICK_REFERENCE.md      # Quick reference
└── README.md               # File ini
```

## 🎨 Konsistensi Warna

Semua halaman menggunakan warna utama **#1D4ED8 (Blue 700)** sesuai dengan `COLOR_GUIDE.md`:

- **Primary Color**: `#1D4ED8`
- **Primary Dark**: `#1e40af` (untuk hover)
- **Primary Light**: `#3b82f6` (untuk accent)

### Implementasi di Dokumentasi

1. **Navigation Bar**
   - Logo dan link hover: `#1D4ED8`
   - Active state: `#1D4ED8`

2. **Sidebar Menu**
   - Active link: background `rgba(29, 78, 216, 0.1)` dan color `#1D4ED8`
   - Hover state: background `rgba(29, 78, 216, 0.05)`

3. **Buttons & Links**
   - Primary button: background `#1D4ED8`
   - Hover: background `#1e40af`
   - Focus: box-shadow dengan `rgba(29, 78, 216, 0.2)`

4. **Info Boxes**
   - Background: `rgba(29, 78, 216, 0.05)`
   - Border: `rgba(29, 78, 216, 0.2)`

5. **Cards**
   - Hover border: `#1D4ED8`
   - Box shadow: `rgba(29, 78, 216, 0.1)`

## 📄 Konten Dokumentasi

### Halaman Utama (`docs/index.html`)

Berisi 4 section utama:

#### 1. **Pengenalan**
- Apa itu WARGAGO
- Fitur utama
- Mengapa WARGAGO
- Benefit cards

#### 2. **Instalasi**
- Persyaratan sistem (Android, iOS, Web)
- Download aplikasi
- Langkah instalasi (4 steps)

#### 3. **Konfigurasi Awal**
- Setup RT/RW baru
- Informasi RT/RW
- Data pengurus
- Konfigurasi iuran
- Bank account

#### 4. **Struktur Organisasi & Role**
- Hierarki role (Super Admin → Admin/Bendahara/Sekretaris → Warga)
- Hak akses per role (tabel permissions)
- Role-based access control (RBAC)

## 🎯 Fitur Dokumentasi

### Navigation
- ✅ Sidebar navigasi sticky dengan scroll spy
- ✅ Smooth scroll ke section
- ✅ Active state otomatis berdasarkan scroll position
- ✅ Breadcrumb navigation

### Interactive Elements
- ✅ Copy code button pada code blocks
- ✅ Back to top button (muncul setelah scroll 500px)
- ✅ Reading progress bar di top
- ✅ Collapsible sidebar sections untuk mobile
- ✅ Keyboard shortcuts (Ctrl/Cmd + K untuk search)

### UI Components
- ✅ Info boxes (biru)
- ✅ Warning boxes (kuning)
- ✅ Benefit cards (grid 2 kolom)
- ✅ Requirements cards
- ✅ Download cards dengan hover effect
- ✅ Step-by-step guide dengan numbering
- ✅ Code blocks dengan syntax highlighting
- ✅ Role diagram visual
- ✅ Permissions table

### Responsive Design
- ✅ Desktop: Sidebar sticky di kiri, content di kanan
- ✅ Tablet: Sidebar collapsible
- ✅ Mobile: Sidebar di atas, content di bawah
- ✅ Grid responsif (2 kolom → 1 kolom)

## 🚀 Cara Menggunakan

### Menjalankan Lokal

1. Buka `index.html` di browser untuk landing page
2. Klik "Dokumentasi" di navbar atau buka `docs/index.html` langsung
3. Navigasi menggunakan sidebar atau scroll

### Deploy

Upload semua file ke hosting (Netlify, Vercel, GitHub Pages, dll):

```bash
# Struktur yang harus diupload:
.
├── index.html
├── styles.css
├── script.js
├── wargago-logo.png
├── wargago-screenshot.png
└── docs/
    ├── index.html
    ├── docs-styles.css
    └── docs-script.js
```

## 📱 Fitur yang Akan Datang

Konten dokumentasi yang perlu ditambahkan:

### Panduan Pengguna
- [ ] **Admin RT/RW** - Manajemen warga, polling, agenda
- [ ] **Bendahara** - Sistem keuangan, laporan
- [ ] **Sekretaris** - Administrasi, surat-menyurat
- [ ] **Warga** - Profil, iuran, marketplace

### Fitur Utama (Detail)
- [ ] **Manajemen Data Warga** - KYC, OCR, face detection
- [ ] **Sistem Keuangan** - Iuran, tagihan, laporan
- [ ] **Agenda & Kegiatan** - Calendar, RSVP, attendance
- [ ] **Polling & Voting** - Buat polling, vote, hasil
- [ ] **Marketplace** - Jual-beli, order management
- [ ] **Dashboard & Laporan** - Charts, export data

### Developer
- [ ] **Arsitektur Sistem** - Tech stack, database design
- [ ] **API Reference** - Endpoints, authentication, examples
- [ ] **Database Schema** - ERD, tables, relationships
- [ ] **Panduan Kontribusi** - Git workflow, coding standards

### Sumber Daya
- [ ] **UI Components** - Component library
- [ ] **Design System** - Colors, typography, spacing
- [ ] **Code Examples** - Sample code, best practices
- [ ] **FAQ** - Frequently asked questions
- [ ] **Troubleshooting** - Common issues & solutions

## 🎨 Customization

### Mengubah Warna Utama

Edit CSS variables di `styles.css` dan `docs/docs-styles.css`:

```css
:root {
    --primary-color: #1D4ED8;      /* Ubah ke warna yang diinginkan */
    --primary-dark: #1e40af;       /* Versi lebih gelap */
    --primary-light: #3b82f6;      /* Versi lebih terang */
}
```

### Menambahkan Section Baru

1. Tambahkan section di `docs/index.html`:

```html
<section id="section-baru" class="doc-section">
    <h1>Judul Section</h1>
    <p>Konten section...</p>
</section>
```

2. Tambahkan link di sidebar:

```html
<li><a href="#section-baru">Section Baru</a></li>
```

3. JavaScript akan otomatis handle smooth scroll dan active state

## 📊 Metrics & Analytics

Untuk tracking, tambahkan Google Analytics atau Plausible:

```html
<!-- Di <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 SEO Optimization

Sudah diimplementasikan:
- ✅ Semantic HTML5
- ✅ Meta tags (title, description, viewport)
- ✅ Heading hierarchy (h1 → h6)
- ✅ Alt text untuk images
- ✅ Descriptive links

Tambahan yang bisa dilakukan:
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] Robots.txt

## 📞 Support

Untuk pertanyaan atau issue:
- Email: support@wargago.id
- GitHub: [github.com/wargago](https://github.com/wargago)
- Dokumentasi: [docs.wargago.id](https://docs.wargago.id)

## 📝 License

Copyright © 2025 WARGAGO. All rights reserved.

---

**Terakhir diupdate:** 16 Desember 2025  
**Versi:** 1.0.0  
**Status:** ✅ Production Ready

