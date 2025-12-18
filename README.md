# 🚀 marcusscherdel.com – Landingpage

> Meine persönliche Landingpage – gebaut mit **React + Vite**  
> Spielwiese für UI, Animationen und saubere Frontend-Patterns.

🌐 **Live:** https://marcusscherdel.com  
🧪 **Playground:** Animationen, Modals, Micro-Interactions  
🛠️ **Stack:** React · Vite · CSS · Nginx

---

## ✨ Warum dieses Projekt?

Diese Seite ist **kein Template**, sondern bewusst:

- ein **React-Übungsprojekt**
- eine **echte produktive Seite**
- ein Ort, um neue UI-Ideen auszuprobieren
- ein Showcase für saubere Struktur & Lesbarkeit

Alles, was hier landet, soll:
- verständlich sein
- wartbar bleiben
- und im echten Leben Sinn machen

---

## 🧱 Features

- ⚛️ React mit funktionalen Komponenten
- 🎬 Scroll-Reveal Animationen (IntersectionObserver)
- 🪟 Projekt-Modals (kein sofortiges Wegnavigieren)
- 🌗 Dark / Light Mode (persistiert)
- 🧠 Saubere Component-Struktur
- 📱 Responsive Layout
- 🚫 Keine UI-Library – alles bewusst „handmade“

---

## 📂 Projektstruktur

```text
src/
├─ components/
│  ├─ header.jsx
│  ├─ about.jsx
│  ├─ appSection.jsx
│  ├─ projects.jsx
│  ├─ ProjectModal.jsx
│  ├─ reveal.jsx
│  └─ footer.jsx
│
├─ data/
│  └─ projects.js
│
├─ hooks/
│  ├─ useTheme.js
│  └─ useInView.js
│
├─ App.jsx
├─ main.jsx
└─ index.css


npm install
npm run dev
npm run build
