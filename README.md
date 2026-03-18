# SparkDream

AI-powered video generation platform with text-to-video creation, social media formatting, and meme generation.

## Features

- **Text-to-Video** -- Generate videos from natural language prompts
- **Video Gallery** -- Browse and manage generated video content
- **Effect Picker** -- Apply visual effects and transitions to videos
- **Aspect Ratio Control** -- Configure output dimensions for different platforms
- **Duration Settings** -- Set custom video length and timing
- **Music Integration** -- Add background music to generated videos
- **Image-to-Video** -- Upload images as starting frames for video generation
- **Social Format Picker** -- Export in TikTok, Instagram Reels, YouTube Shorts formats
- **Trending Feed** -- Discover popular community-created videos

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Storage:** AWS S3 (presigned URLs)
- **Database:** Supabase (with SSR support)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd sparkdream
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_S3_BUCKET=your_bucket_name
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
sparkdream/
├── src/
│   ├── components/       # React components
│   │   ├── ui/           # Shared UI primitives
│   │   ├── layout/       # Navbar and page wrapper
│   │   ├── video/        # Video creation components
│   │   ├── effects/      # Visual effect picker
│   │   └── social/       # Social media export
│   └── lib/              # Utilities and helpers
├── public/               # Static assets
└── package.json
```

