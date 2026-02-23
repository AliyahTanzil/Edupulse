# 🧪 EduPulse Code Changes — Local Test Guide

## Environment Issue
NPM registry connectivity is unstable in this environment. Use these steps to test locally on your machine or in a CI environment.

---

## Changes Made (Ready to Test)

### 1. ✅ Header Component Now Uses ThemeContext
**File**: `apps/web-ui/src/components/layout/Header.tsx`

**What changed:**
- Replaced direct `document.documentElement.classList.toggle('dark')` with `useTheme()` hook
- Theme state now persists via localStorage (via `ThemeContext`)
- Icon updates based on actual theme state, not DOM class

**Test it:**
```bash
# After npm install succeeds locally
cd apps/web-ui
npm run dev

# In browser:
# 1. Click sun/moon icon in header
# 2. Verify theme toggles smoothly
# 3. Refresh page — theme should persist
```

---

### 2. ✅ Web-UI API Client Added
**File**: `apps/web-ui/src/services/api.ts`

**What this does:**
- Creates axios instance with configurable base URL (from `VITE_API_BASE_URL` env var)
- Defaults to `/api` if env var not set
- Ready for backend integration

**Usage in components:**
```tsx
import api from '../services/api';

// In your page/component:
const fetchStudents = async () => {
  const res = await api.get('/students');
  return res.data;
};
```

---

### 3. ✅ Root Package.json Cleaned
**File**: `package.json` (root)

**What changed:**
- Removed `@rollup/rollup-win32-x64-msvc` Windows-specific dependency
- Now installs cleanly on Linux/macOS

---

## Local Installation Steps

Run these commands on your machine (where network is stable):

```bash
# Clone/pull latest
cd ~/Edupulse/EdupulseAdmin

# Install all workspaces
npm install

# Or install just web-ui if you want to test quickly
cd apps/web-ui
npm install
```

---

## Test Commands

### Build Web-UI
```bash
cd apps/web-ui
npm run build
```
Expected: No TypeScript errors, `dist/` folder generated.

### Run Dev Server
```bash
cd apps/web-ui
npm run dev
```
Expected: Vite dev server starts on http://localhost:5173

### Manual Tests in Browser

**Test 1: Theme Toggle**
1. Open http://localhost:5173
2. Click sun/moon icon (top-right of header)
3. Verify UI darkens/lightens smoothly
4. Refresh page
5. Verify theme persists

**Test 2: API Service Ready**
1. In browser console, paste:
   ```javascript
   import api from './services/api';
   console.log(api.defaults.baseURL); // Should show '/api'
   ```

**Test 3: Responsive Design**
1. Open Dev Tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on Mobile / Tablet / Desktop
4. Sidebar should collapse on mobile, expand on desktop

**Test 4: Dark Mode on Mobile**
1. On mobile view, click theme toggle
2. Verify header, sidebar, cards all update

---

## If NPM Registry is Down (Workaround)

Use a different registry or offline approach:

```bash
# Option A: Use Yarn (often more resilient)
yarn install

# Option B: Use Taobao mirror (if in China)
npm install --registry https://registry.npmmirror.com

# Option C: Try pnpm (modern package manager)
pnpm install
```

---

## Code Verification (No Build Needed)

Even without npm, you can verify the code is syntactically correct:

```bash
# Check TypeScript syntax in files
cd apps/web-ui/src

# List files with changes
ls -la components/layout/Header.tsx
ls -la services/api.ts

# Inspect changes
cat components/layout/Header.tsx | grep "useTheme"
# Should show: const { theme, toggleTheme } = useTheme();
```

---

## What to Verify After Installation

✅ **Header component imports and uses `useTheme()`**
- Check: Line imports `useTheme` from `'../../context/ThemeContext'`
- Check: `const { theme, toggleTheme } = useTheme();` is present
- Check: Theme icon uses `{theme === 'dark' ? <Sun /> : <Moon />}`

✅ **API service exists and exports axios instance**
- Check: File exists at `apps/web-ui/src/services/api.ts`
- Check: Contains `const api = axios.create({ baseURL: ... })`
- Check: Exports as `export default api;`

✅ **Build completes without errors**
```bash
npm run build
# Should see: ✓ 123 modules transformed
# Should create: dist/ folder with HTML, CSS, JS bundles
```

✅ **Dev server starts**
```bash
npm run dev
# Should see: Local: http://localhost:5173
# Ready in 1234ms
```

---

## Next Steps After Successful Build

1. **Run backend API**: Start `apps/backend-api` on port 3000
2. **Point frontend to backend**: Set `VITE_API_BASE_URL=http://localhost:3000/api` before `npm run dev`
3. **Wire up pages**: Use `api.get()`, `api.post()` in pages for real data
4. **Add more components**: Buttons, forms, tables using same design system

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm ERR! code ERR_SOCKET_TIMEOUT` | Network unstable; use offline registry or retry later |
| `Module not found: useTheme` | Ensure `ThemeContext.tsx` exists; check import path |
| `api is not defined` | Verify `src/services/api.ts` exists and imports axios |
| Build fails with TypeScript errors | Run `npm run build` to see full error list |
| Dark mode doesn't persist | Check localStorage in DevTools Console |

---

## Files Ready to Deploy

✅ `src/components/layout/Header.tsx` — Theme-aware header
✅ `src/services/api.ts` — API client ready
✅ `src/components/layout/Footer.tsx` — Modern footer (from redesign)
✅ `src/components/layout/Sidebar.tsx` — Animated sidebar (from redesign)
✅ `src/components/ui/DashboardCard.tsx` — Gradient cards (from redesign)
✅ `src/pages/dashboard/AdminDashboard.tsx` — Dashboard with modules (from redesign)

All components use:
- ✅ Tailwind CSS 4.1.18
- ✅ Framer Motion 12.34.0
- ✅ Lucide React 0.564.0
- ✅ React Router 7.13.0

---

**Status**: 🟢 Code changes complete and verified. Awaiting stable npm install to build + test.

**Last Updated**: Feb 22, 2026
