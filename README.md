# 🛒 E-Commerce Products

### Technical Assessment | Student Council Development Dept.

**Context:** Developed as a competitive entry task for the FICE Student Council Dev Department.
**Project Goal:** Successfully demonstrated technical proficiency in building production-ready, high-performance frontend interfaces under a strict deadline.

## Recent Updates & Optimizations

The project was recently refactored to optimize performance, clean up technical debt, and streamline the bundle size:

- **Simplified Architecture:** Removed heavy, unnecessary libraries to rely on clean, core modern APIs.
- **Next-Gen React & Framework Stack:** Upgraded to **React 19** and **Next.js 16** to leverage the latest framework optimizations, including utilizing **Turbopack** for blazing-fast local development compilation.

## Tech Stack & Ecosystem

### Core Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript for strong type-safety across product structures, filters, and UI properties.
- **UI & Styling:** Material UI (MUI v9) powered by Emotion (`@emotion/react`, `@emotion/styled`) for component styling and custom theming.

### State Management & Data Fetching

- **Server State:** `@tanstack/react-query` (v5) coupled with `axios` for seamless asynchronous server queries, automatic caching, and background data synchronization.
- **Client State:** `zustand` (v5) acts as a lightweight, lightning-fast store to handle local interactions (like shopping cart mutations and filter flags).

### Code Quality & Formatting

- Strict linting configuration using **ESLint 9** coupled with specialized rules like `eslint-plugin-simple-import-sort` and `@tanstack/eslint-plugin-query` to enforce robust development practices.
- Formatted seamlessly via **Prettier**.

## Key Features

- **Polished Professional UI:** Built entirely utilizing Material UI components with responsive layout structures and unified design tokens.
- **Dynamic Search & Filtering:** Sophisticated product exploration capabilities allowing instant search and granular client-side product filtering.
- **Optimized Reusability:** Rigid atomic component-based design pattern guaranteeing maximum modular code reuse, readability, and maintenance.

## Getting Started

1. **Install dependencies:**

```bash
npm install

```

2. **Run the development server (with Turbopack enablement):**

```bash
npm run dev

```

3. Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) inside your browser to interact with the catalog application.
