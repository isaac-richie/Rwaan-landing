# Animated Background Implementation Guide

## Overview

I've created two versions of the flowing golden lines background effect:

1. **`AnimatedBackground.tsx`** - Canvas-based (more complex, highly customizable)
2. **`AnimatedBackgroundCSS.tsx`** - CSS-only (lightweight, better performance)

---

## Quick Start (Recommended: CSS Version)

### Step 1: Import the component

```tsx
import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";
```

### Step 2: Add to any section

```tsx
<section className="relative py-20">
  {/* Add the animated background */}
  <AnimatedBackgroundCSS intensity="medium" />
  
  {/* Your content */}
  <div className="relative z-10">
    <h2>Your Section Title</h2>
    <p>Your content here...</p>
  </div>
</section>
```

That's it! The golden lines will flow across the background.

---

## Usage Examples

### Platform Section (Product Suite)

```tsx
// src/components/Features.tsx or Platform.tsx

import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";

export default function Platform() {
  return (
    <section id="platform" className="section-divider relative py-16 sm:py-20">
      {/* Flowing golden lines background */}
      <AnimatedBackgroundCSS intensity="medium" />
      
      {/* Existing gradient blob (keep this too) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      {/* Your content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* ... rest of your content ... */}
      </div>
    </section>
  );
}
```

### Hero Section

```tsx
// src/components/Hero.tsx

import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Animated flowing lines */}
      <AnimatedBackgroundCSS intensity="low" />
      
      {/* Existing background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0B90B]/20 to-transparent blur-3xl" />
        {/* ... other gradients ... */}
      </div>

      {/* Your hero content */}
      <div className="relative z-10">
        {/* ... */}
      </div>
    </section>
  );
}
```

### CTA Section

```tsx
// src/components/CTA.tsx

import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";

export default function CTA() {
  return (
    <section id="waitlist" className="section-divider relative py-20 sm:py-24">
      {/* High intensity for more dramatic effect */}
      <AnimatedBackgroundCSS intensity="high" />
      
      {/* ... rest of your CTA content ... */}
    </section>
  );
}
```

---

## Intensity Levels

### `intensity="low"` (3 lines)
- Subtle, minimal distraction
- Best for: Hero, areas with lots of text
- Performance: Excellent

### `intensity="medium"` (5 lines) ⭐ **Recommended**
- Balanced, noticeable but not overwhelming
- Best for: Platform, Features, most sections
- Performance: Good

### `intensity="high"` (8 lines)
- Bold, energetic, eye-catching
- Best for: CTA sections, landing sections
- Performance: Good

---

## Canvas Version (Advanced)

If you need more control, use the Canvas version:

```tsx
import AnimatedBackground from "@/components/AnimatedBackground";

<AnimatedBackground 
  intensity="medium" 
  color="#F0B90B"  // Custom color (hex)
/>
```

**Pros:**
- More customizable
- Smoother animation
- Can change colors dynamically

**Cons:**
- Slightly heavier (uses requestAnimationFrame)
- Not as mobile-friendly

---

## Layering Multiple Effects

You can combine the animated lines with your existing gradient blobs:

```tsx
<section className="relative">
  {/* Layer 1: Animated lines (furthest back) */}
  <AnimatedBackgroundCSS intensity="medium" />
  
  {/* Layer 2: Static gradient blobs */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
  </div>
  
  {/* Layer 3: Your content (on top) */}
  <div className="relative z-10">
    {/* Content here */}
  </div>
</section>
```

---

## Mobile Optimization

Both components are mobile-optimized:

- **Reduced motion support**: Automatically disables animation if user has `prefers-reduced-motion` enabled
- **GPU acceleration**: Uses `transform` for smooth 60fps animation
- **Low opacity**: Set to 40% opacity to avoid distraction on small screens

---

## Performance Tips

1. **Use CSS version for most cases** - It's lighter and more performant
2. **Don't stack multiple animated backgrounds** - One per section max
3. **Keep intensity low/medium** - High intensity can affect scrolling on older devices
4. **Test on mobile** - Always check performance on real devices

---

## Customization

### Change the color

```tsx
// In AnimatedBackgroundCSS.tsx, line 40:
// Change this:
rgba(240, 185, 11, 0.4)  // Golden

// To this (for blue):
rgba(59, 130, 246, 0.4)  // Blue
```

### Adjust speed

```tsx
// In AnimatedBackgroundCSS.tsx, line 54:
// Change duration:
--duration: ${12 + i * 2}s  // Slower
--duration: ${6 + i * 1}s   // Faster
```

### Change line length

```tsx
// In AnimatedBackgroundCSS.tsx, line 19:
width: 200px;  // Current
width: 300px;  // Longer lines
width: 150px;  // Shorter lines
```

---

## Quick Implementation Checklist

- [ ] Copy both component files to `/src/components/`
- [ ] Import `AnimatedBackgroundCSS` in your target section
- [ ] Add `<AnimatedBackgroundCSS intensity="medium" />` inside section
- [ ] Make sure section has `position: relative` and `overflow: hidden`
- [ ] Test on desktop and mobile
- [ ] Adjust intensity if needed

---

## Example: Complete Platform Section

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Radar, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";

export default function Platform() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="platform" className="section-divider relative overflow-hidden py-16 sm:py-20">
      {/* ✨ ANIMATED GOLDEN LINES ✨ */}
      <AnimatedBackgroundCSS intensity="medium" />
      
      {/* Static gradient blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Your content */}
        <div className="mb-12 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Product Suite
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Tools engineered for high-velocity prediction markets.
          </h2>
        </div>

        {/* Product cards grid */}
        {/* ... your existing code ... */}
      </div>
    </section>
  );
}
```

---

That's it! The flowing golden lines are now active in your background. 🎨✨
