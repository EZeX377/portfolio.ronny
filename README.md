# Ronny Das | UI/UX Developer & Project Lead

A high-performance, system-design focused portfolio built with **Next.js (Turbo)**, representing a professional delivery-focused approach to web architecture and interactive design.

## 🚀 Overview
This project is a complete migration and evolution of the Ronny Das portfolio into the Next.js ecosystem. It is engineered for optimal performance, smooth interactivity, and high-fidelity visual consistency across all devices and themes.

---

## ✨ Key Features

### 1. Performance & Stability
- **Next.js Image Optimization:** All assets utilize `<Image />` with automatic resizing and format conversion.
- **LCP Image Prioritization:** Critical elements like the Navbar logo and primary project previews are prioritized for near-instant rendering.
- **Zero-FOUC Dark Mode:** A custom head-script resolves the user's theme preference before the first paint, eliminating the dark-mode "flash" on reload.

### 2. Smooth Scrolling & Interactivity
- **Lenis Implementation:** Cinematic smooth scrolling with cinematic physics and high-performance RAF loop.
- **Anchor Link Hijacking:** Integrated `scrollTo` logic for all internal links with custom cubic easing (`[0.22, 1, 0.36, 1]`) and precise offsets for sticky headers.
- **Hydration-Safe States:** All interactive components (like the ThemeToggle) are hardened to ensure visual consistency between server and client.

### 3. Advanced Motion System
- **Depth-Aware Hover States:** Framer Motion variants that utilize parallax techniques (multi-speed translations and scaling) to create a tactile sense of depth.
- **System-Reactive Feedback:** Subtle content lifts (`y: -3`) and responsive eased transitions that align with a "functional design" philosophy.
- **GPU Acceleration:** All animations utilize `will-change: transform` to offload work to the GPU for buttery-smooth visual fidelity.

---

## 🛠️ Core Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Vanilla setup)
- **Animation:** Framer Motion
- **Scrolling:** @studio-freight/lenis
- **Icons:** Lucide React

---

## 🛠️ Getting Started

### Scripts
- `npm run dev` – Starts the local development server (turbo-charged).
- `npm run build` – Generates an optimized production build.
- `npm run start` – Serves the production-ready build locally.

### Directory Structure
- `/app` – Centralized App Router logic, layout definitions, and global styling.
- `/components` – Modular, reusable UI components built for individual sections and interactive systems.
- `/assets` – Optimized SVGs and WebP assets for high-density displays.
- `/components/portfolio/content.js` – Single source of truth for all project data and navigation links.

---

## 🎯 Optimization Philosophy
The codebase follows a **System First** approach—every motion, layout shift, and loading state is intentional. By leveraging the latest Next.js features and specialized libraries like Lenis, the portfolio provides a production-grade experience that reflects the same level of care given to large-scale enterprise platforms.


