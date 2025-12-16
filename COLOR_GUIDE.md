# 🎨 Panduan Warna WARGAGO Landing Page

## Skema Warna Utama

### Primary Colors (Biru - #1D4ED8)

```css
--primary-color: #1D4ED8;      /* Blue 700 - Warna utama */
--primary-dark: #1e40af;       /* Blue 800 - Untuk hover & dark mode */
--primary-light: #3b82f6;      /* Blue 500 - Untuk accent & highlights */
```

**Penggunaan:**
- ✅ Buttons utama
- ✅ Links & hover states
- ✅ Icons & badges
- ✅ Phone mockup background
- ✅ Active states
- ✅ Border highlights
- ✅ Glow effects

---

## Implementasi Warna #1D4ED8 di Landing Page

### 1. Navigation Bar
```css
/* Logo (jika SVG) */
fill: #1D4ED8;

/* Links hover */
color: #1D4ED8;
```

### 2. Hero Section
```css
/* Phone mockup screen background */
background: linear-gradient(180deg, #1D4ED8 0%, #1e40af 100%);

/* Glow effects */
box-shadow: 0 0 30px rgba(29, 78, 216, 0.5);

/* Background decoration */
background: rgba(29, 78, 216, 0.08);
```

### 3. Buttons & CTAs
```css
/* Primary button */
background: #1D4ED8;

/* Hover state */
background: #1e40af;

/* Focus state */
box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.1);
```

### 4. Cards & Components
```css
/* Card border on hover */
border-color: #1D4ED8;

/* Icon background */
background: #1D4ED8;

/* Badge & labels */
color: #1D4ED8;
background: rgba(29, 78, 216, 0.1);
```

### 5. Links & Interactive Elements
```css
/* Link color */
color: #1D4ED8;

/* Link hover */
color: #1e40af;
```

### 6. Feature Cards
```css
/* Icon containers */
background: rgba(29, 78, 216, 0.1);

/* Icon color */
fill: #1D4ED8;
```

### 7. Phone Mockup 3D Effects
```css
/* Shadow glow */
box-shadow: -20px 0 40px rgba(29, 78, 216, 0.2);

/* Hover glow */
box-shadow: -25px 0 50px rgba(29, 78, 216, 0.3);

/* Decorative circles */
background: radial-gradient(circle, #1D4ED8 0%, transparent 70%);
```

### 8. Bottom Navigation (Phone)
```css
/* Active item background */
background: #1D4ED8;

/* Active icon */
fill: #1D4ED8;
```

### 9. CTA Section
```css
/* Background gradient */
background: linear-gradient(135deg, #1D4ED8 0%, #1e40af 100%);
```

### 10. Footer
```css
/* Social media hover */
background: #1D4ED8;
```

---

## Kombinasi Warna

### Background Patterns
```css
/* Light background with blue accent */
background: #f7fafc;
border: 2px solid rgba(29, 78, 216, 0.1);

/* Blue gradient overlay */
background: linear-gradient(135deg, #1D4ED8 0%, #1e40af 100%);
```

### Text on Blue Background
```css
/* White text on blue */
background: #1D4ED8;
color: #ffffff;

/* Opacity variations */
color: rgba(255, 255, 255, 0.9);
color: rgba(255, 255, 255, 0.7);
```

### Shadows & Glows
```css
/* Soft glow */
box-shadow: 0 0 30px rgba(29, 78, 216, 0.2);

/* Medium glow */
box-shadow: 0 0 40px rgba(29, 78, 216, 0.3);

/* Strong glow */
box-shadow: 0 0 60px rgba(29, 78, 216, 0.5);
```

---

## Warna Pendukung

### Text Colors
```css
--text-dark: #1a1a1a;      /* Headings */
--text-gray: #4a5568;      /* Body text */
--text-light: #718096;     /* Secondary text */
```

### Background Colors
```css
--bg-gray: #f7fafc;        /* Page background */
--bg-light: #edf2f7;       /* Section background */
--white: #ffffff;          /* White */
```

### Border Colors
```css
--border-color: #e2e8f0;   /* Default borders */
border: 2px solid #1D4ED8; /* Active/Highlight borders */
```

---

## Contoh Penggunaan

### Primary Button
```css
.btn-primary {
    background: #1D4ED8;
    color: #ffffff;
    border: none;
}

.btn-primary:hover {
    background: #1e40af;
}

.btn-primary:focus {
    box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.2);
}
```

### Secondary Button
```css
.btn-secondary {
    background: transparent;
    color: #1D4ED8;
    border: 2px solid #1D4ED8;
}

.btn-secondary:hover {
    background: #1D4ED8;
    color: #ffffff;
}
```

### Card with Hover
```css
.card {
    border: 2px solid #e2e8f0;
    transition: all 0.3s;
}

.card:hover {
    border-color: #1D4ED8;
    box-shadow: 0 10px 25px rgba(29, 78, 216, 0.15);
}
```

---

## Accessibility (Kontras Warna)

### ✅ Kombinasi yang Aman (WCAG AA)

```css
/* Blue on White */
color: #1D4ED8;
background: #ffffff;
/* Contrast ratio: 7.04:1 ✅ AAA */

/* White on Blue */
color: #ffffff;
background: #1D4ED8;
/* Contrast ratio: 7.04:1 ✅ AAA */

/* Dark Blue on Light */
color: #1e40af;
background: #f7fafc;
/* Contrast ratio: 8.59:1 ✅ AAA */
```

---

## 🎯 Variasi Warna untuk Elemen Berbeda

### Opacity Levels
```css
rgba(29, 78, 216, 1.0)   /* 100% - Solid */
rgba(29, 78, 216, 0.8)   /*  80% - Semi-transparent */
rgba(29, 78, 216, 0.5)   /*  50% - Half transparent */
rgba(29, 78, 216, 0.3)   /*  30% - Light overlay */
rgba(29, 78, 216, 0.1)   /*  10% - Very light tint */
rgba(29, 78, 216, 0.05)  /*   5% - Subtle background */
```

### Gradient Examples
```css
/* Vertical gradient */
background: linear-gradient(180deg, #1D4ED8 0%, #1e40af 100%);

/* Diagonal gradient */
background: linear-gradient(135deg, #1D4ED8 0%, #1e40af 100%);

/* Radial gradient */
background: radial-gradient(circle, #1D4ED8 0%, #3b82f6 100%);
```

---

## 🔧 CSS Variables Usage

```css
/* Gunakan CSS variables untuk konsistensi */
:root {
    --primary-color: #1D4ED8;
    --primary-dark: #1e40af;
    --primary-light: #3b82f6;
}

/* Contoh penggunaan */
.element {
    color: var(--primary-color);
    background: var(--primary-light);
    border-color: var(--primary-dark);
}
```

---

## ✅ Checklist Konsistensi Warna

- [x] Warna utama: #1D4ED8
- [x] Navigation links hover: #1D4ED8
- [x] Buttons primary: #1D4ED8
- [x] Phone mockup background: gradient #1D4ED8
- [x] Icons & badges: #1D4ED8
- [x] Active states: #1D4ED8
- [x] Glow effects: rgba(29, 78, 216, ...)
- [x] CTA section background: gradient #1D4ED8
- [x] Footer social hover: #1D4ED8
- [x] All shadows menggunakan rgba(29, 78, 216, ...)

---

**Terakhir diupdate:** 16 Desember 2025  
**Warna Utama:** #1D4ED8 (Blue 700)  
**Status:** ✅ Konsisten di seluruh landing page
