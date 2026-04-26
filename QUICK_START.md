# 🚀 Quick Start - Yacine TV Vercel Deployment

## 1️⃣ Local Development (5 minutes)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173 in your browser
```

## 2️⃣ Build & Test Locally (2 minutes)

```bash
# Build for production
pnpm build

# Preview the production build
pnpm preview

# Open http://localhost:4173 in your browser
```

## 3️⃣ Deploy to Vercel (3 minutes)

### Option A: GitHub + Vercel (Recommended)
```bash
# 1. Create GitHub repository
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/yacinetv.git
git push -u origin main

# 2. Go to vercel.com/dashboard
# 3. Click "Add New Project"
# 4. Select your GitHub repository
# 5. Click "Deploy"
```

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## 4️⃣ Connect Your Domain (2 minutes)

1. Go to Vercel Project Settings → Domains
2. Add domain: `yacinetv.store`
3. Update DNS at your registrar
4. Wait 24-48 hours for propagation

## ✅ Verification Checklist

- [ ] Local dev server runs: `pnpm dev`
- [ ] Production build succeeds: `pnpm build`
- [ ] No TypeScript errors: `pnpm check`
- [ ] Deployed to Vercel
- [ ] Domain connected
- [ ] Website loads at yacinetv.store
- [ ] Download button works
- [ ] No 404 errors on page refresh

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| Framework | React 19 + Vite 7 |
| CSS | Tailwind CSS 4 |
| Bundle Size | 587 KB (171 KB gzip) |
| Build Time | ~4 seconds |
| Type Safety | TypeScript 5.9 |

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| `pnpm: command not found` | Install pnpm: `npm install -g pnpm` |
| Build fails locally | Run `pnpm install` and `pnpm check` |
| 404 on page refresh | Check `vercel.json` is in root |
| Domain not working | Wait 48 hours, check DNS settings |

## 📚 Full Documentation

- **Deployment Guide**: See `DEPLOYMENT.md`
- **Project Structure**: See `README.md`
- **Configuration**: See `vite.config.ts` and `vercel.json`

## 🎯 Next Steps

1. ✅ Test locally
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel
4. ✅ Connect domain
5. ✅ Monitor performance

---

**Status**: Ready for production deployment ✅
