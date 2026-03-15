# Ruin DLL Injector - Color Scheme Documentation

## New Modern Color Palette

### Background Colors
- **Primary**: `#0A0A0F` - Deep black-blue (main background)
- **Secondary**: `#12121A` - Slightly lighter (cards, sections)
- **Tertiary**: `#1A1A25` - Elevated surfaces
- **Elevated**: `#222230` - Hover states, raised elements

### Text Colors
- **Primary**: `#FFFFFF` - Pure white (headlines, important text)
- **Secondary**: `#B8B8C8` - Soft gray (body text, descriptions)
- **Tertiary**: `#787888` - Muted text (labels, metadata)
- **Muted**: `#585868` - Disabled text, placeholders

### Accent Colors (Vibrant Purple-Cyan Gradient)
- **Primary**: `#8B5CF6` - Modern purple (primary CTAs)
- **Primary Hover**: `#7C3AED` - Deep purple (hover state)
- **Secondary**: `#06B6D4` - Cyan accent (secondary CTAs)
- **Secondary Hover**: `#0891B2` - Dark cyan (hover state)

### Gradient
- **From**: `#8B5CF6` (Purple)
- **Via**: `#6366F1` (Indigo)
- **To**: `#06B6D4` (Cyan)

### Border Colors
- **Default**: `#2A2A3A` - Subtle borders
- **Hover**: `#3A3A4A` - Hover borders
- **Accent**: `#4A4A5A` - Active/selected borders

### Glow Effects
- **Primary**: `rgba(139, 92, 246, 0.15)` - Purple glow
- **Secondary**: `rgba(6, 182, 212, 0.15)` - Cyan glow
- **Combined**: `rgba(139, 92, 246, 0.1)` - Mesh gradient

## Design Improvements

### Better Contrast
- Deeper blacks for better readability
- Clearer text hierarchy with 4 levels
- Improved button contrast

### Modern Gradients
- Purple-to-cyan gradient (very trendy)
- Animated gradient shifts
- Mesh gradient backgrounds
- Radial glow effects

### Enhanced Interactions
- Better hover states with scale effects
- Glow effects on focus
- Smooth transitions
- Animated gradient buttons

### Visual Depth
- 4-level background hierarchy
- Elevated surface system
- Subtle shadows and glows
- Border hierarchy for depth

## Usage Examples

### Buttons
```tsx
// Primary button with gradient
<Button className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary animate-gradient">
  Download Now
</Button>

// Secondary button
<Button variant="secondary" className="border-2 border-border-default">
  Learn More
</Button>
```

### Cards
```tsx
<div className="bg-background-secondary border-2 border-border-default rounded-xl p-6 hover:border-accent-primary hover:shadow-2xl hover:-translate-y-1">
  Card content
</div>
```

### Gradients
```tsx
// Text gradient
<span className="text-gradient">Gradient Text</span>

// Background mesh gradient
<div className="bg-gradient-mesh opacity-30" />

// Radial glow
<div className="bg-gradient-radial" />
```

### Glow Effects
```tsx
// Primary glow
<div className="glow-primary" />

// Secondary glow
<div className="glow-secondary" />
```

## Technical Implementation

### Tailwind Config
All colors are defined in `tailwind.config.ts` under the `theme.extend.colors` section.

### CSS Variables
Global CSS variables are defined in `app/[locale]/globals.css` for:
- Consistent color usage
- Theme switching capability
- Runtime color manipulation

### Component Usage
Components reference colors using Tailwind classes:
- `bg-background-primary`
- `text-accent-primary`
- `border-border-default`
- `from-accent-primary`

## Color Accessibility

### Contrast Ratios
- Primary text on backgrounds: > 12:1 (AAA)
- Secondary text on backgrounds: > 7:1 (AAA)
- Accent buttons on backgrounds: > 4.5:1 (AA)

### WCAG Compliance
- ✅ Level AAA for text
- ✅ Level AA for interactive elements
- ✅ Focus indicators visible
- ✅ Color not sole indicator

## Animation Classes

### New Animations
- `animate-gradient` - Shifting gradient background
- `animate-pulse-glow` - Breathing glow effect
- `animate-float` - Floating animation
- `animate-fade-in` - Smooth fade in
- `animate-slide-up` - Slide up animation

### Utility Classes
- `text-gradient` - Gradient text effect
- `bg-gradient-mesh` - Mesh gradient background
- `bg-gradient-radial` - Radial gradient background
- `glow-primary` - Primary glow shadow
- `glow-secondary` - Secondary glow shadow

## Migration Notes

### Changes from Old Scheme
- Deeper blacks (0A0A0F vs 1E1E1E)
- Purple-cyan gradient (blue-cyan before)
- Better text hierarchy (4 levels vs 3)
- Enhanced glow effects
- More sophisticated border system

### Benefits
- ✨ More modern and trendy
- 🎨 Better visual appeal
- 📖 Improved readability
- ⚡ Enhanced interactivity
- 🌈 Richer visual experience

---

**Last Updated**: 2026-03-15
**Design System**: Modern Dark Theme with Purple-Cyan Gradient
