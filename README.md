# Codelinear | Technical Assignment

A modern, visually stunning fintech landing page built as a technical assignment for Codelinear. The application features a sleek dark-themed aesthetic, smooth scrolling animations, responsive layouts, and highly polished UI components.

## 🚀 Tech Stack

This project leverages cutting-edge web technologies:

- **Framework**: [Next.js](https://nextjs.org/) (v16) with App Router
- **UI Library**: [React](https://react.dev/) (v19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: `next/font/google` (Inter & Geist)
- **Language**: TypeScript

## ✨ Key Features

- **Pixel-Perfect UI**: Precisely aligns with the provided Figma/design requirements, featuring custom blue gradients (`bg-linear-to-r from-[#00b4fd] to-[#0047b8]`), translucent glassmorphism effects, and highly refined typographic hierarchies.
- **Smooth Animations**: Uses `Framer Motion` extensively for elegant viewport-triggered fade-ins, sliding carousels, and infinite marquee scrolls.
- **Responsive Design**: Built mobile-first, gracefully adapting layouts from small screens all the way up to ultra-wide displays (using custom breakpoints and grid/flex reflows).
- **Reusable Components**: Heavily componentized architecture (e.g., `<Button />`, `<FadeIn />`, `<CTAMain />`) for maximum maintainability and consistency.
- **Optimized Assets**: Next.js `<Image />` tags are used universally for performant, layout-shift-free media delivery.

## 💻 Getting Started

Follow these instructions to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HimanshuPadecha/codelinear-assignment
   cd codelinear-assignment
   ```

2. **Install dependencies:**
   Make sure you are running a recent version of Node.js.

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

- `src/app/`: Next.js App Router configuration, global CSS, layout, and fonts.
- `src/components/`: Reusable, cross-section utility components (like the `FadeIn` animation wrapper).
- `src/reuseables/`: Core UI building blocks (like the primary `Button` component).
- `src/sections/`: Modularized page sections (Hero, Core Banking, Solutions, Digital Banking, CTA, Footer, etc.). Each section has its own dedicated directory and logic to ensure clean separation of concerns.

## 🚢 Deployment

This application is ready to be deployed to [Vercel](https://vercel.com). The deployment process is fully optimized and handles custom font loading (`Inter`) and Tailwind v4 compilation natively.
