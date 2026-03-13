# Image Setup Guide

## About AI Image Generation

I cannot directly generate images, but I've set up the portfolio structure to easily accept images when you add them. Here's how to get images and add them:

## Quick Image Generation Options

### Option 1: Free AI Tools (Recommended)
1. **Leonardo.ai** (Free tier available)
   - Visit: https://leonardo.ai/
   - Sign up for free account
   - Use prompts below

2. **Bing Image Creator** (Free, uses DALL-E 3)
   - Visit: https://www.bing.com/images/create
   - Sign in with Microsoft account
   - Use prompts below

3. **Stable Diffusion** (Free, open source)
   - Visit: https://huggingface.co/spaces/stabilityai/stable-diffusion
   - No signup required
   - Use prompts below

### Option 2: Paid (Better Quality)
- **Midjourney**: https://midjourney.com/ ($10/month)
- **DALL-E via OpenAI**: https://openai.com/dall-e-2

## Image Prompts for Your Portfolio

### 1. Profile Picture/Avatar (Optional)
**Note:** The portfolio now uses a clean icon-based design for projects, so project images are optional. However, you can still add a profile picture.

**Prompt:**
```
Professional headshot portrait of a young Indian software developer, 
modern business casual style, clean background, professional lighting, 
portfolio photo, high quality, 4k
```

**Settings:**
- Size: 512x512px or 1024x1024px (square)
- Save as: `profile.jpg` or `profile.webp`
- Location: `/public/profile.jpg`

### 2. Project Screenshots (Optional)
**Note:** Projects now use icon-based cards. Images are optional but can be added later if desired.

**Nool ERP Project Screenshot:**
**Prompt:**
```
Modern enterprise SaaS dashboard interface, React application, 
data visualization charts, admin panel, clean UI design, 
blue and white color scheme, professional software, 
screenshot style, high quality
```

**Settings:**
- Size: 1200x800px or 1920x1080px (landscape)
- Save as: `nool-erp.jpg` or `nool-erp.webp`
- Location: `/public/projects/nool-erp.jpg`

### 3. Badminton App Project Screenshot
**Prompt:**
```
Modern mobile app interface for sports tracking, badminton app, 
clean design, score tracking UI, match statistics, 
white and green color scheme, mobile screen mockup, 
high quality design
```

**Settings:**
- Size: 1200x800px (landscape)
- Save as: `badminton-app.jpg`
- Location: `/public/projects/badminton-app.jpg`

### 4. Interior Design Website Screenshot
**Prompt:**
```
Modern interior design portfolio website, elegant UI design, 
showcasing design projects, clean minimalist layout, 
beige and white color scheme, professional website mockup, 
high quality design
```

**Settings:**
- Size: 1200x800px (landscape)
- Save as: `interior-design.jpg`
- Location: `/public/projects/interior-design.jpg`

## How to Add Images

### Step 1: Generate Images
Use one of the tools above with the prompts provided.

### Step 2: Optimize Images
1. **Convert to WebP** (better performance):
   - Use: https://cloudconvert.com/webp-converter
   - Or: https://squoosh.app/

2. **Resize if needed**:
   - Profile: 400x400px minimum
   - Projects: 1200x800px minimum

### Step 3: Add to Project
1. Create folder: `/public/projects/`
2. Add images:
   - `/public/profile.jpg` (or `.webp`)
   - `/public/projects/nool-erp.jpg`
   - `/public/projects/badminton-app.jpg`
   - `/public/projects/interior-design.jpg`

### Step 4: Update Components

**For Profile Picture (Optional):**
- File: `components/sections/hero.tsx`
- Uncomment the Image component (around line 70-76)
- Comment out the initials div

**For Project Images (Optional):**
- Projects now use a clean icon-based design without image placeholders
- If you want to add images later, you can modify the projects component
- Images are not required - the current design is clean and professional

## Image Requirements Summary

| Image Type | Required | Size | Format | Location |
|------------|----------|------|--------|----------|
| Profile | Optional | 400x400px+ | JPG/WebP | `/public/profile.jpg` |
| Project Images | Optional* | 1200x800px+ | JPG/WebP | `/public/projects/` |

*Projects now use icon-based cards - images are optional and not required for the design.

## Quick Start (Optional - 5 minutes)

**Note:** The portfolio works perfectly without images! Projects use a clean icon-based design.

**If you want to add a profile picture:**
1. Go to https://www.bing.com/images/create
2. Generate profile picture with prompt #1
3. Download and save as `/public/profile.jpg`
4. Uncomment Image component in `hero.tsx`
5. Done! Your profile picture will appear.

**Project images are optional** - the current design is clean and professional without them.

## Alternative: Use Placeholder Services

If you want to test the layout first:
- **Placeholder.com**: `https://via.placeholder.com/400x400`
- **Unsplash**: Use their API for random images
- **Picsum**: `https://picsum.photos/1200/800`

But I recommend using AI-generated or real project screenshots for a professional look.

