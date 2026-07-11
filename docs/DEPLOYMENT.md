# Deployment Guide

## Prerequisites

- GitHub repository
- Vercel account (free)
- Firebase project deployed
- Environment variables ready

## Deploy to Vercel (Recommended)

### Method 1: Using Vercel Dashboard

1. **Create Vercel Account**
   - Go to [Vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Connect GitHub Repository**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - Go to **Settings** → **Environment Variables**
   - Add all variables from `.env.local`:
     ```
     VITE_FIREBASE_API_KEY
     VITE_FIREBASE_AUTH_DOMAIN
     VITE_FIREBASE_PROJECT_ID
     VITE_FIREBASE_STORAGE_BUCKET
     VITE_FIREBASE_MESSAGING_SENDER_ID
     VITE_FIREBASE_APP_ID
     VITE_GOOGLE_ANALYTICS_ID
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site is live!

### Method 2: Using CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Configuration

### 1. Update Firebase Authorized Domains

1. Go to Firebase Console
2. Authentication → Settings → Authorized domains
3. Add your Vercel domain:
   - `your-project.vercel.app`

### 2. Update Google OAuth

1. Go to Google Cloud Console
2. OAuth consent screen
3. Add your Vercel domain to authorized redirects

### 3. Configure Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Project → Settings → Domains
3. Add custom domain
4. Update DNS records as instructed

## Build Optimization

### Before Deployment

1. **Build locally**
   ```bash
   npm run build
   ```
   Check for any errors

2. **Preview build**
   ```bash
   npm run preview
   ```
   Test the production version locally

3. **Optimize images**
   - Compress all images
   - Use WebP format

4. **Check bundle size**
   ```bash
   npm run build -- --report
   ```

## Monitoring Deployment

### Vercel Analytics

- Go to Dashboard → Analytics
- Monitor:
  - Page load times
  - HTTP status codes
  - Errors and crashes

### Google Analytics

1. Set `VITE_GOOGLE_ANALYTICS_ID` in environment
2. View reports at analytics.google.com
3. Monitor:
   - User traffic
   - Popular pages
   - Conversion rates

## Continuous Deployment

Vercel automatically deploys on every push to main branch:

1. Make changes locally
2. Commit and push to GitHub
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```
3. Vercel automatically builds and deploys
4. Check deployment at vercel.com

## Rollback to Previous Version

1. Go to Vercel Dashboard
2. Go to Deployments
3. Find the previous working version
4. Click "Promote to Production"

## Environment-Specific Configuration

### Development
```
VITE_APP_ENV=development
```

### Production
```
VITE_APP_ENV=production
```

Use in code:
```javascript
const isDev = import.meta.env.VITE_APP_ENV === 'development'
```

## Troubleshooting Deployment

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Try `npm install` locally

### Environment Variables Not Loading
- Verify variable names match exactly
- Redeploy after adding variables
- Use underscore instead of hyphen

### Site Shows Blank Page
- Check browser console for errors
- Clear cache (Ctrl+Shift+Delete)
- Check Firebase is initialized

### 404 Errors on Routes
- Configure `vercel.json` for SPA routing
- Already configured in this project

## Performance Tips

1. ✅ Enable caching headers
2. ✅ Compress images
3. ✅ Use CDN for static assets
4. ✅ Implement lazy loading
5. ✅ Monitor Core Web Vitals
6. ✅ Use Vercel Analytics

## Security Checklist

- ✅ Use HTTPS (automatic with Vercel)
- ✅ Set secure environment variables
- ✅ Configure Firestore security rules
- ✅ Enable Google OAuth verification
- ✅ Regular security updates
- ✅ Monitor for suspicious activity

## Support

- Vercel Docs: https://vercel.com/docs
- Firebase Docs: https://firebase.google.com/docs
- Contact: support@aitoolshub.com

---

**Your site is live! 🎉**
