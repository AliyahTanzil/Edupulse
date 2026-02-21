# 🎨 EduPulse Color System Reference

## Color Values & Usage

### Primary Colors

| Color | Value | RGB | Usage |
|-------|-------|-----|-------|
| Primary Blue | `#3B82F6` | `rgb(59, 130, 246)` | Buttons, links, primary actions |
| Dark Blue | `#2563EB` | `rgb(37, 99, 235)` | Hover states, darker accents |
| Light Blue | `#60A5FA` | `rgb(96, 165, 250)` | Disabled states, backgrounds |
| Cyan | `#06B6D4` | `rgb(6, 182, 212)` | Accent, secondary actions |
| Dark Cyan | `#0891B2` | `rgb(8, 145, 178)` | Cyan hover states |

### Secondary Colors

| Color | Value | RGB | Usage |
|-------|-------|-----|-------|
| Emerald Green | `#22C55E` | `rgb(34, 197, 94)` | Success states, confirmations |
| Dark Green | `#16A34A` | `rgb(22, 163, 74)` | Green hover states |
| Yellow | `#FBBF24` | `rgb(251, 191, 36)` | Warnings, caution |
| Orange | `#F97316` | `rgb(249, 115, 22)` | Secondary warnings |
| Red | `#EF4444` | `rgb(239, 68, 68)` | Errors, deletions |
| Rose | `#F43F5E` | `rgb(244, 63, 94)` | Error accents, alerts |

### Neutral Colors (Light Mode)

| Color | Value | RGB | Usage |
|-------|-------|-----|-------|
| White | `#FFFFFF` | `rgb(255, 255, 255)` | Background, main surface |
| Light Gray 50 | `#FAFAFA` | `rgb(250, 250, 250)` | Secondary background |
| Light Gray 100 | `#F3F4F6` | `rgb(243, 244, 246)` | Hover backgrounds |
| Light Gray 200 | `#E5E7EB` | `rgb(229, 231, 235)` | Borders, dividers |
| Gray 400 | `#9CA3AF` | `rgb(156, 163, 175)` | Placeholder text |
| Gray 600 | `#4B5563` | `rgb(75, 85, 99)` | Secondary text |
| Slate 900 | `#111827` | `rgb(17, 24, 39)` | Primary text |

### Neutral Colors (Dark Mode)

| Color | Value | RGB | Usage |
|-------|-------|-----|-------|
| Deep Slate | `#0D1B2A` | `rgb(13, 27, 42)` | Dark background |
| Slate 800 | `#1E293B` | `rgb(30, 41, 59)` | Dark cards |
| Slate 700 | `#334155` | `rgb(51, 65, 85)` | Dark hover |
| Slate 600 | `#475569` | `rgb(71, 85, 105)` | Dark borders |
| Slate 400 | `#94A3B8` | `rgb(148, 163, 184)` | Dark secondary text |
| Slate 200 | `#E2E8F0` | `rgb(226, 232, 240)` | Dark primary text |

---

## CSS Custom Properties

```css
:root {
  /* Primary Colors */
  --color-primary: 59 130 246;
  --color-secondary: 34 197 94;
  --color-accent: 6 182 212;

  /* Neutral Colors - Light Mode */
  --color-neutral-50: 250 250 250;
  --color-neutral-100: 243 244 246;
  --color-neutral-200: 229 231 235;
  --color-neutral-300: 209 213 219;
  --color-neutral-400: 156 163 175;
  --color-neutral-500: 107 114 128;
  --color-neutral-600: 75 85 99;
  --color-neutral-700: 55 65 81;
  --color-neutral-800: 31 41 55;
  --color-neutral-900: 17 24 39;

  /* Status Colors */
  --color-success: 34 197 94;
  --color-warning: 245 158 11;
  --color-danger: 239 68 68;
  --color-info: 59 130 246;

  /* Backgrounds & Cards - Light Mode */
  --color-background: 255 255 255;
  --color-card: 249 250 251;
  --color-text: 17 24 39;
  --color-text-secondary: 107 114 128;
  --color-border: 229 231 235;

  /* Dark Mode Colors */
  --color-primary-dark: 96 165 250;
  --color-secondary-dark: 74 222 128;
  --color-accent-dark: 34 211 238;

  --color-neutral-50-dark: 17 24 39;
  --color-neutral-100-dark: 31 41 55;
  /* ... more dark neutrals ... */

  --color-background-dark: 13 27 42;
  --color-card-dark: 30 41 59;
  --color-text-dark: 243 244 246;
  --color-text-secondary-dark: 156 163 175;
  --color-border-dark: 55 65 81;
}
```

---

## Gradient Combinations

### Popular Gradient Pairs

```css
/* Blue to Cyan (Primary) */
background: linear-gradient(to right, #3B82F6, #06B6D4);

/* Purple to Pink */
background: linear-gradient(to right, #A855F7, #EC4899);

/* Green to Emerald */
background: linear-gradient(to right, #22C55E, #10B981);

/* Orange to Red */
background: linear-gradient(to right, #F97316, #EF4444);

/* Teal to Cyan */
background: linear-gradient(to right, #14B8A6, #06B6D4);

/* Slate to Slate (Neutral) */
background: linear-gradient(to right, #475569, #1E293B);
```

### Module Gradient Combinations

```
Class Dashboard:   linear-gradient(135deg, #3B82F6, #06B6D4)
SIS:              linear-gradient(135deg, #1E40AF, #06B6D4)
Fee Management:   linear-gradient(135deg, #22C55E, #10B981)
Library:          linear-gradient(135deg, #A855F7, #EC4899)
HR:               linear-gradient(135deg, #F97316, #EF4444)
Attendance:       linear-gradient(135deg, #06B6D4, #3B82F6)
Exams:            linear-gradient(135deg, #FBBF24, #F97316)
Timetable:        linear-gradient(135deg, #6366F1, #A855F7)
Reports:          linear-gradient(135deg, #22C55E, #06B6D4)
Communication:    linear-gradient(135deg, #EC4899, #F43F5E)
Hostel:           linear-gradient(135deg, #B45309, #F97316)
Transport:        linear-gradient(135deg, #3B82F6, #4F46E5)
Inventory:        linear-gradient(135deg, #64748B, #334155)
Staff:            linear-gradient(135deg, #06B6D4, #22C55E)
Students:         linear-gradient(135deg, #F43F5E, #EC4899)
Parents:          linear-gradient(135deg, #A855F7, #4F46E5)
Accounting:       linear-gradient(135deg, #16A34A, #22C55E)
Settings:         linear-gradient(135deg, #475569, #1F2937)
Notifications:    linear-gradient(135deg, #EF4444, #F43F5E)
Admissions:       linear-gradient(135deg, #14B8A6, #06B6D4)
Alumni:           linear-gradient(135deg, #7C3AED, #A855F7)
```

---

## Opacity Scales

| Level | Opacity | Usage |
|-------|---------|-------|
| Subtle | 5-10% | Hover backgrounds, watermarks |
| Light | 20-30% | Borders, dividers |
| Medium | 50% | Medium emphasis, overlays |
| Strong | 70-80% | Text, important elements |
| Full | 100% | Solid colors, main elements |

### Shadow Colors with Opacity

```css
/* Blue Shadow */
box-shadow: 0 10px 15px rgba(59, 130, 246, 0.2);

/* Cyan Shadow */
box-shadow: 0 10px 15px rgba(6, 182, 212, 0.15);

/* Green Shadow */
box-shadow: 0 10px 15px rgba(34, 197, 94, 0.2);

/* Red Shadow */
box-shadow: 0 10px 15px rgba(239, 68, 68, 0.2);
```

---

## Tailwind Color Classes

### Text Colors
```
text-blue-500     → #3B82F6
text-cyan-500     → #06B6D4
text-green-500    → #22C55E
text-red-500      → #EF4444
text-slate-900    → #111827
dark:text-slate-100 → #F3F4F6
```

### Background Colors
```
bg-blue-50        → #EFF6FF
bg-blue-500       → #3B82F6
bg-cyan-500       → #06B6D4
bg-white          → #FFFFFF
dark:bg-slate-800 → #1E293B
```

### Border Colors
```
border-blue-100   → #DBEAFE
border-blue-200   → #BFDBFE
border-blue-500   → #3B82F6
border-slate-200  → #E2E8F0
```

---

## Usage Examples

### Gradient Text
```html
<h1 class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
  Hello World
</h1>
```

### Gradient Background
```html
<div class="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-lg">
  Content
</div>
```

### Hover Color Change
```html
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Button
</button>
```

### Dark Mode Support
```html
<div class="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
  Content
</div>
```

---

## Accessibility Considerations

### Contrast Ratios
- **AAA Compliant**: Blue on White (15.7:1)
- **AAA Compliant**: White on Blue (15.7:1)
- **AA Compliant**: Green on White (5.2:1)
- **AA Compliant**: Cyan on White (3.5:1)

### Color Blind Safe Palette
- ✅ Blue-Green combinations work for most types
- ✅ Avoid pure red-green combinations
- ✅ Always use patterns or icons with colors

### Text Hierarchy
- **Important**: Use dark text (slate-900) on light backgrounds
- **Secondary**: Use gray text (slate-600) for descriptions
- **Disabled**: Use light gray (slate-400) for disabled states

---

## Animation Color Transitions

### Smooth Color Transitions
```css
transition: all 0.3s ease;

/* Changes color on hover */
background-color: var(--color-primary);
```

### Gradient Animations
```css
background: linear-gradient(-45deg, #3B82F6, #06B6D4, #22C55E, #FBBF24);
background-size: 400% 400%;
animation: gradient 15s ease infinite;

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

**Last Updated**: February 21, 2026  
**Color System Version**: 1.0.0  
**Framework**: Tailwind CSS 4.1.18  
**Status**: ✅ Production Ready
