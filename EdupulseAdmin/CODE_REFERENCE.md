# 💻 EduPulse UI Redesign - Code Reference Guide

## Quick Code Snippets

### 1. Using Dashboard Cards

```tsx
import DashboardCard from './components/ui/DashboardCard';
import { Users, GraduationCap } from 'lucide-react';

// Basic Card
<DashboardCard
  title="Total Students"
  value="2,450"
  icon={<GraduationCap size={32} />}
/>

// With Custom Styling
<DashboardCard
  title="Active Classes"
  value="45"
  icon={<School size={32} />}
  className="min-h-[200px]"
/>
```

### 2. Creating Gradient Module Cards

```tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

<Link to="/library">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-xl"
  >
    <BookOpen size={40} />
    <h3 className="mt-3 font-bold text-lg">Library</h3>
  </motion.div>
</Link>
```

### 3. Animation Setup

```tsx
import { motion } from 'framer-motion';

// Container with staggered children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-4 gap-6"
>
  {/* Child items will animate with stagger */}
</motion.div>
```

### 4. Header Component

```tsx
import { Header } from './components/layout/Header';

// In your main layout
<Header />
// Includes: Logo, search, notifications, theme toggle, profile
```

### 5. Footer Component

```tsx
import { Footer } from './components/layout/Footer';

// In your main layout
<Footer />
// Includes: Links, social media, newsletter, security badge
```

### 6. Gradient Backgrounds

```tsx
// Linear Gradient
<div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6">
  Content
</div>

// Diagonal Gradient
<div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500">
  Content
</div>

// Radial Gradient
<div className="bg-gradient-radial from-blue-500 to-transparent">
  Content
</div>
```

### 7. Shadow and Border Styling

```tsx
// Beautiful card styling
<div className="rounded-2xl p-6 bg-white dark:bg-slate-800
                border border-blue-100/50 dark:border-blue-900/30
                shadow-lg hover:shadow-xl hover:shadow-blue-500/10
                transition-all duration-300">
  Content
</div>
```

### 8. Dark Mode Support

```tsx
// Automatically handles light/dark
<div className="bg-white dark:bg-slate-800
                text-slate-900 dark:text-slate-100
                border-blue-100 dark:border-blue-900/30">
  Content
</div>

// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

### 9. Hover Animation Effects

```tsx
import { motion } from 'framer-motion';

// Lift effect on hover
<motion.div whileHover={{ y: -4 }} className="...">
  Content
</motion.div>

// Scale effect
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  Click Me
</motion.button>

// Icon animation
<motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="...">
  <Icon size={40} />
</motion.div>
```

### 10. Responsive Grid

```tsx
// Auto responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>

// Mobile first approach
<div className="
  w-full                    // Mobile: full width
  md:w-1/2                  // Tablet: 50%
  lg:w-1/4                  // Desktop: 25%
  px-4 md:px-6 lg:px-8      // Responsive padding
">
  Content
</div>
```

### 11. Color System Usage

```tsx
// Using CSS Variables
<div style={{
  background: `rgb(var(--color-primary) / 0.1)`,
  borderColor: `rgb(var(--color-primary) / 0.5)`,
  color: `rgb(var(--color-text))`
}}>
  Content
</div>

// Or using Tailwind classes
<div className="bg-blue-500/10 border-blue-500/50 text-slate-900">
  Content
</div>
```

### 12. Button Variants

```tsx
import RippleButton from './components/ui/RippleButton';

// Primary Button
<RippleButton variant="primary">
  Save Changes
</RippleButton>

// Secondary Button
<RippleButton variant="secondary">
  Cancel
</RippleButton>

// Outline Button
<RippleButton variant="outline">
  More Options
</RippleButton>
```

### 13. Loading Skeleton

```tsx
import SkeletonCard from './components/ui/SkeletonCard';

{isLoading ? (
  <div className="grid grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
) : (
  // Actual content
)}
```

### 14. Sidebar Navigation

```tsx
import { Sidebar } from './components/layout/Sidebar';

const navItems = [
  { name: 'Dashboard', to: '/dashboard', roles: ['admin'] },
  { name: 'Users', to: '/users', roles: ['admin', 'editor'] },
  { name: 'Settings', to: '/settings', roles: ['admin'] }
];

<Sidebar
  navigationConfig={navItems}
  userRole="admin"
  isExpanded={true}
  onToggleExpand={() => setExpanded(!expanded)}
/>
```

### 15. Theme Context

```tsx
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

---

## CSS Custom Properties

```css
/* In index.css - Available everywhere */
:root {
  --color-primary: 59 130 246;
  --color-secondary: 34 197 94;
  --color-accent: 6 182 212;
  
  /* ... more colors ... */
}

/* Usage in CSS */
.my-element {
  background-color: rgb(var(--color-primary) / 0.1);
  border-color: rgb(var(--color-primary) / 0.5);
  color: rgb(var(--color-text));
}

/* Dark mode */
.dark {
  --color-background: 13 27 42;
  --color-card: 30 41 59;
  --color-text: 243 244 246;
}
```

---

## Common Tailwind Classes Used

### Colors
```
text-blue-500       Button text
bg-gradient-to-r    Linear gradient
text-white/80       Text with opacity
border-blue-100/50  Border with opacity
```

### Sizing
```
w-full              100% width
h-8                 8 units height (32px)
p-6                 Padding all sides
px-4 py-2           Padding X & Y
gap-6               Gap between items
```

### Layout
```
flex                Flexbox container
grid                CSS Grid
grid-cols-4         4 columns
gap-6               Gap between items
justify-center      Center horizontally
items-center        Center vertically
```

### Effects
```
shadow-lg           Large shadow
rounded-2xl         Large border radius (16px)
transition-all      Smooth transitions
duration-300        300ms animation
hover:shadow-xl     Shadow on hover
dark:bg-slate-800   Dark mode background
```

---

## Animation Patterns

### Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Slide In
```tsx
<motion.div
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Scale In
```tsx
<motion.div
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="visible"
>
  {children}
</motion.div>
```

---

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          ← Gradient header
│   │   ├── Footer.tsx          ← Modern footer
│   │   ├── Sidebar.tsx         ← Animated sidebar
│   │   └── MainLayout.tsx      ← Main container
│   └── ui/
│       ├── DashboardCard.tsx   ← Modern cards
│       ├── SkeletonCard.tsx    ← Loading state
│       └── RippleButton.tsx    ← Ripple buttons
├── pages/
│   └── dashboard/
│       └── AdminDashboard.tsx  ← Dashboard with modules
├── context/
│   └── ThemeContext.tsx        ← Theme management
├── styles/
│   └── theme.ts                ← Theme config
├── index.css                   ← Global styles & colors
└── main.tsx                    ← Entry point
```

---

## Browser Compatibility

### Supported Browsers
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Features Used
- ✅ CSS Gradients
- ✅ CSS Custom Properties
- ✅ Backdrop Filter (blur)
- ✅ Flexbox & Grid
- ✅ CSS Transitions
- ✅ CSS Transforms

---

## Performance Tips

1. **Use CSS for animations**: Faster than JS
2. **Lazy load**: Only animate visible elements
3. **GPU acceleration**: Use `transform` and `opacity`
4. **Reduce motion**: Respect `prefers-reduced-motion`
5. **Optimize images**: Use appropriate formats

---

## Accessibility Features

```tsx
// Keyboard navigation
<button
  aria-label="Toggle sidebar"
  onClick={handleToggle}
>
  Menu
</button>

// Focus states
<style>{`
  button:focus-visible {
    outline: 2px solid #3B82F6;
    outline-offset: 2px;
  }
`}</style>

// ARIA labels
<div role="navigation" aria-label="Main navigation">
  {/* Navigation items */}
</div>
```

---

## Testing Examples

```tsx
// Component test
import { render, screen } from '@testing-library/react';
import DashboardCard from './DashboardCard';

test('renders card with title and value', () => {
  render(
    <DashboardCard
      title="Students"
      value="100"
    />
  );
  expect(screen.getByText('Students')).toBeInTheDocument();
  expect(screen.getByText('100')).toBeInTheDocument();
});
```

---

## Deployment Checklist

- [ ] All components tested
- [ ] Dark mode verified
- [ ] Responsive on all devices
- [ ] Animations smooth (60fps)
- [ ] Accessibility audit passed
- [ ] Performance optimized
- [ ] Documentation complete
- [ ] No console errors

---

## Support & Resources

### Documentation
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- React Router: https://reactrouter.com
- Lucide Icons: https://lucide.dev

### Local Files
- Design Guide: `./DESIGN_GUIDE.md`
- Color System: `./COLOR_SYSTEM.md`
- Redesign Summary: `./UI_REDESIGN_SUMMARY.md`

---

**Last Updated**: February 21, 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
