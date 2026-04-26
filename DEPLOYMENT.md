# Deployment Guide - Yacine TV to Vercel

## Prerequisites
- Vercel account (free at vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ installed locally

## Step 1: Prepare Your Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Yacine TV Vercel deployment"
```

## Step 2: Push to GitHub (or your Git provider)

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/yacinetv.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Paste your repository URL
5. Click "Import"
6. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
7. Click "Deploy"
8. Wait for deployment to complete

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 4: Connect Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Click "Add Domain"
4. Enter: `yacinetv.store`
5. Choose one of these options:
   - **Use Vercel Nameservers** (easiest)
   - **Add CNAME Record** (if using external DNS)

### If using Vercel Nameservers:
- Update your domain registrar to use Vercel's nameservers
- Vercel will provide the nameserver addresses
- Wait 24-48 hours for DNS propagation

### If using CNAME:
- Add CNAME record pointing to: `cname.vercel.com`
- Update in your domain registrar's DNS settings

## Step 5: Verify Deployment

1. Visit your domain: https://yacinetv.store
2. Check that the page loads correctly
3. Test the download button
4. Verify no 404 errors appear

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure `pnpm build` runs locally: `pnpm build`
- Check for TypeScript errors: `pnpm check`

### 404 Errors on Routes
- Vercel.json should have rewrite rules
- Check that `vercel.json` is in the root directory
- Verify the rewrite rule: `"destination": "/index.html"`

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Use online DNS checker: https://dns.google/
- Check Vercel domain settings are correct

### Slow Performance
- Check Vercel Analytics
- Optimize images in `client/public/`
- Consider code splitting for large bundles

## Environment Variables

If you need environment variables:

1. Go to Vercel Project Settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy for changes to take effect

Example:
```
VITE_API_URL = https://api.example.com
```

## Continuous Deployment

After initial setup, every push to your main branch will:
1. Trigger a new build on Vercel
2. Run tests (if configured)
3. Deploy automatically if successful
4. Update your live site

## Rollback to Previous Deployment

1. Go to Vercel project "Deployments" tab
2. Find the previous working deployment
3. Click the three dots menu
4. Select "Promote to Production"

## Performance Optimization

### Current Build Stats
- Bundle Size: ~587 KB (171 KB gzipped)
- Framework: React 19 + Vite 7
- CSS: Tailwind CSS 4

### To Reduce Bundle Size:
1. Use dynamic imports for heavy components
2. Tree-shake unused dependencies
3. Optimize images with WebP format
4. Use Vercel Analytics to identify bottlenecks

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com

---

**Deployment Status**: Ready for production ✅
**Last Updated**: 2026-04-25
