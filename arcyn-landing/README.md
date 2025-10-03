# Arcyn Landing Page

The landing page for Arcyn - The AI-Powered IDE for SaaS Development.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Database**: Supabase
- **Deployment**: Vercel

## 🎨 Features

- ✨ Dark, modern UI with gradient accents
- 🎭 Smooth animations and transitions
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎯 SEO-friendly
- 📊 Waitlist management with Supabase
- 🖼️ Custom SVG illustrations

## 🗂️ Project Structure

```
arcyn-landing/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   ├── sections/     # Page sections (Hero, Features, etc.)
│   │   ├── ui/           # UI components (Button, Input, etc.)
│   │   ├── interactive/  # Interactive components (CodeEditor, etc.)
│   │   ├── animations/   # Animation wrappers
│   │   └── forms/        # Form components
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript types
│   ├── data/             # Static data
│   └── styles/           # Global styles
├── public/
│   └── images/           # SVG assets
│       ├── logos/
│       ├── features/
│       ├── mockups/
│       ├── tech-stack/
│       └── hero/
└── ...config files
```

## 🎯 Sections

1. **Hero** - Main CTA with code editor mockup
2. **How It Works** - 3-step process explanation
3. **Code Showcase** - Interactive code/terminal mockups
4. **Features** - 6 key features with icons
5. **Tech Stack** - Technologies used
6. **Social Proof** - Reddit validation + waitlist count
7. **Pricing** - Early bird pricing
8. **FAQ** - Common questions
9. **Final CTA** - Last conversion opportunity

## 🔧 Configuration

### Supabase Setup

1. Create a Supabase project
2. Create a `waitlist` table:

```sql
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

3. Add your Supabase URL and Anon Key to `.env.local`

## 🚀 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or manually:

```bash
pnpm build
pnpm start
```

## 📝 License

Proprietary - All rights reserved

## 🔥 Built with Fire

This landing page showcases the power of modern web development with a focus on aesthetics and performance.