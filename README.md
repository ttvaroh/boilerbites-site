# BoilerBites Website

A modern, responsive website for the BoilerBites app built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Landing Page**: Hero section, key features, and call-to-action buttons
- **About Page**: Mission statement, app overview, and technology stack
- **Support Page**: Contact information, FAQ section, and help resources
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Theme**: Matches the app's branding with Purdue Gold accents
- **Fast & SEO Optimized**: Static site generation for optimal performance

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Sora (Google Fonts)
- **Deployment**: Static export for universal hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn)
- Git (for version control)

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd boilerbites_site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a static export for hosting:

```bash
npm run build
```

This will generate a static site in the `out` directory that can be deployed to any static hosting service.

## Hosting Instructions

The website is configured for static export, making it compatible with all major free hosting platforms. Choose the option that works best for you:

### Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest option for Next.js projects with automatic deployments and zero configuration.

**Steps:**

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/boilerbites-site.git
   git push -u origin main
   ```

2. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

3. **Import your repository**:
   - Click "Add New..." → "Project"
   - Select your `boilerbites-site` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Your site is live!**:
   - Vercel will provide a URL like `boilerbites-site.vercel.app`
   - Every push to your main branch will trigger a new deployment
   - You can add a custom domain in the project settings

**Benefits:**
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Free custom domain support
- ✅ Automatic deployments on git push
- ✅ Built-in analytics (free tier)
- ✅ Global CDN

---

### Option 2: Netlify

Netlify offers excellent static site hosting with a generous free tier.

**Steps:**

1. **Push your code to GitHub** (same as Vercel step 1)

2. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up" and choose "GitHub"
   - Authorize Netlify to access your GitHub account

3. **Deploy your site**:
   - Click "Add new site" → "Import an existing project"
   - Select your `boilerbites-site` repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `out`
   - Click "Deploy site"

4. **Your site is live!**:
   - Netlify will provide a URL like `boilerbites-site.netlify.app`
   - You can add a custom domain in Site settings → Domain management

**Benefits:**
- ✅ Free SSL certificates
- ✅ Custom domain support
- ✅ Form handling (if needed)
- ✅ Branch previews
- ✅ Automatic deployments

---

### Option 3: GitHub Pages

GitHub Pages is perfect if you want everything in one place and don't need advanced features.

**Steps:**

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d out"
   }
   ```

3. **Configure GitHub repository**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "gh-pages" branch
   - Click "Save"

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Your site is live!**:
   - URL will be: `https://yourusername.github.io/boilerbites-site`
   - Re-run `npm run deploy` whenever you want to update

**Note:** You may need to update `next.config.js` to add a `basePath` if deploying to a subdirectory:
```js
const nextConfig = {
  basePath: '/boilerbites-site',
  output: 'export',
  // ... rest of config
}
```

**Benefits:**
- ✅ Completely free
- ✅ Integrated with GitHub
- ✅ Custom domain support
- ✅ Simple deployment process

---

### Option 4: Cloudflare Pages

Cloudflare Pages offers fast global CDN and excellent performance.

**Steps:**

1. **Push your code to GitHub** (same as other options)

2. **Sign up for Cloudflare**:
   - Go to [cloudflare.com](https://cloudflare.com)
   - Sign up for a free account
   - Navigate to "Pages" in the dashboard

3. **Connect your repository**:
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your GitHub account and `boilerbites-site` repository

4. **Configure build settings**:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - Click "Save and Deploy"

5. **Your site is live!**:
   - Cloudflare will provide a URL like `boilerbites-site.pages.dev`
   - You can add a custom domain in the project settings

**Benefits:**
- ✅ Fast global CDN
- ✅ Free SSL
- ✅ Custom domain support
- ✅ Automatic deployments
- ✅ Unlimited bandwidth (free tier)

---

## Custom Domain Setup

All hosting platforms support custom domains. Here's a quick guide:

### Vercel
1. Go to Project Settings → Domains
2. Add your domain (e.g., `boilerbites.app`)
3. Follow the DNS configuration instructions
4. Vercel handles SSL automatically

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS configuration instructions
5. SSL is automatic

### GitHub Pages
1. Go to Repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Configure DNS records (CNAME or A records)
4. GitHub will generate SSL certificate automatically

### Cloudflare Pages
1. Go to your project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain
4. Follow DNS configuration (if using Cloudflare DNS, it's automatic)

## Local Development

### Development Server
```bash
npm run dev
```
Opens at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
```
Generates static files in the `out` directory

### Preview Production Build
```bash
npm run build
npm run start
```

## Project Structure

```
boilerbites_site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Landing page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── support/
│   │   └── page.tsx         # Support page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   └── Background.tsx       # Dark gradient background
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Updating Colors
Edit `tailwind.config.js` to modify the color palette:
- `purdueGold`: #CFB991
- `purdueBlack`: Various shades
- `warmWhite`: #fafaf9

### Updating Content
- **Landing page**: Edit `app/page.tsx`
- **About page**: Edit `app/about/page.tsx`
- **Support page**: Edit `app/support/page.tsx`
- **Navigation**: Edit `components/Header.tsx`
- **Footer**: Edit `components/Footer.tsx`

### Adding Pages
Create a new folder in `app/` with a `page.tsx` file:
```
app/
└── new-page/
    └── page.tsx
```

## Troubleshooting

### Build Errors
- Ensure Node.js 18+ is installed
- Delete `node_modules` and `.next` folders, then run `npm install` again
- Check that all dependencies are installed: `npm install`

### Deployment Issues
- Verify `next.config.js` has `output: 'export'` for static hosting
- Ensure build command is `npm run build`
- Check that output directory is `out` (for Netlify/Cloudflare Pages)

### Styling Issues
- Clear browser cache
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

## Support

For issues or questions:
- **Email**: support@boilerbites.app
- **GitHub Issues**: [github.com/yourusername/boilerbites/issues](https://github.com/yourusername/boilerbites/issues)

## License

This project is part of the BoilerBites app ecosystem.

---

**Made with ❤️ for Purdue students**

