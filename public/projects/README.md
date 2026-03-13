# Project Images

Add your project screenshots here:

1. **nool-erp.jpg** - Nool ERP dashboard screenshot
2. **badminton-app.jpg** - Badminton App mobile interface screenshot  
3. **interior-design.jpg** - Interior Design Website screenshot

## Image Requirements for Fast Loading:
- **Format**: WebP (recommended) or JPG
- **Size**: Optimize to 1200x800px (landscape) or smaller
- **File Size**: Keep under 200KB per image for fast loading
- **Optimization**: Use tools like:
  - TinyPNG: https://tinypng.com/
  - Squoosh: https://squoosh.app/
  - ImageOptim (Mac): https://imageoptim.com/

## How to Optimize Images:

### Option 1: Convert to WebP (Best Performance)
1. Use Squoosh.app or similar tool
2. Convert JPG → WebP
3. Adjust quality to 80-85% (good balance)
4. Save as `.webp` files

### Option 2: Compress JPG
1. Use TinyPNG to compress
2. Target file size: under 200KB
3. Maintain 1200x800px dimensions

### Quick Optimization Command (if you have ImageMagick):
```bash
# Convert to WebP
magick convert nool-erp.jpg -quality 85 -resize 1200x800 nool-erp.webp

# Or compress JPG
magick convert nool-erp.jpg -quality 85 -resize 1200x800 -strip nool-erp-optimized.jpg
```

## How to Add:
1. Optimize your images first (see above)
2. Save them with the exact filenames:
   - `nool-erp.jpg` (or `.webp`)
   - `badminton-app.jpg` (or `.webp`)
   - `interior-design.jpg` (or `.webp`)
3. Place them in this `/public/projects/` folder
4. The images will automatically appear and be optimized by Next.js

**Note**: Next.js automatically optimizes images, but pre-optimizing them will make loading even faster!
