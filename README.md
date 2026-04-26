# Yacine TV - Vercel Frontend App

A modern, responsive React + Vite application for Yacine TV streaming service. This is a frontend-only application optimized for deployment on Vercel.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or pnpm 10+
- Vercel CLI (optional, for local testing)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── _core/           # Core utilities and hooks
│   │   ├── contexts/        # React contexts
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── vercel.json              # Vercel deployment config
├── tsconfig.json            # TypeScript configuration
└── components.json          # shadcn/ui components config
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Professional dark interface with green accents
- **Interactive Components**: Accordion FAQs, smooth animations
- **Optimized Performance**: Vite for fast builds and HMR
- **TypeScript**: Full type safety throughout the application
- **shadcn/ui**: Pre-built accessible components

## 🌐 Deployment to Vercel

### Option 1: Connect GitHub Repository
1. Push this project to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will automatically detect Vite and configure the build
6. Click "Deploy"

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 3: Manual Upload
1. Run `pnpm build` to generate `dist/` folder
2. Upload the `dist/` folder contents to Vercel

## ⚙️ Configuration

### Environment Variables
If you need environment variables, create a `.env.local` file:
```
VITE_API_URL=https://api.example.com
```

### Custom Domain
To connect a custom domain (e.g., yacinetv.store):
1. Go to Vercel Project Settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📦 Build Output

- **Output Directory**: `dist/`
- **Build Command**: `vite build`
- **Framework**: React 19 + Vite 7
- **CSS**: Tailwind CSS 4
- **Bundle Size**: ~587 KB (171 KB gzipped)

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start dev server with HMR

# Production
pnpm build        # Build for production
pnpm preview      # Preview production build locally

# Code Quality
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
```

## 📝 Notes

- This is a **frontend-only** application with no backend dependencies
- All routing is handled client-side with Wouter
- Static files should be placed in `client/public/`
- The app uses a single-page application (SPA) architecture
- All routes are rewritten to `index.html` for proper SPA routing on Vercel

## 🤝 Support

For issues or questions, please refer to:
- [Vite Documentation](https://vitejs.dev)
- [Vercel Documentation](https://vercel.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📄 License

MIT
