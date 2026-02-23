# Docker Build & Test Guide

## Overview
Use Docker to build and test the web-ui in an isolated environment with full network access.

---

## Prerequisites

Install Docker and Docker Compose:
- **Linux**: `sudo apt install docker.io docker-compose`
- **macOS**: Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Windows**: Download [Docker Desktop](https://www.docker.com/products/docker-desktop)

---

## Quick Start

### Build and Run Web-UI Only
```bash
cd ~/Edupulse/EdupulseAdmin

# Build image
docker build -t edupulse-web:latest .

# Run container
docker run -p 3000:3000 -e VITE_API_BASE_URL=http://localhost:3001/api edupulse-web:latest
```

Then open http://localhost:3000 in your browser.

---

### Run Full Stack (Web + Backend)

```bash
cd ~/Edupulse/EdupulseAdmin

# Start both services
docker-compose up

# In another terminal, check running containers
docker ps
```

Expected output:
```
CONTAINER ID   IMAGE                   PORTS
abc123...      edupulse-web:latest    0.0.0.0:3000->3000/tcp
def456...      node:20-alpine          0.0.0.0:3001->3001/tcp
```

Access:
- **Web UI**: http://localhost:3000
- **Backend API**: http://localhost:3001/api

---

## Testing in Docker

### 1️⃣ Test Theme Toggle (Dark Mode)
```bash
# While docker-compose is running:
# 1. Open http://localhost:3000
# 2. Click sun/moon icon (top-right header)
# 3. UI should darken/lighten smoothly
# 4. Refresh page — theme should persist
```

### 2️⃣ Test API Client
```bash
# Check if API service is wired correctly
# Open browser DevTools Console (F12)
# Paste:
fetch('http://localhost:3001/api/health')
  .then(r => r.json())
  .then(d => console.log('API Response:', d))
  .catch(e => console.error('API Error:', e));
```

### 3️⃣ View Logs
```bash
# Web-ui logs
docker-compose logs web-ui

# Backend logs
docker-compose logs backend

# All logs
docker-compose logs -f
```

### 4️⃣ Rebuild After Code Changes
```bash
# Re-build image
docker-compose build --no-cache

# Restart services
docker-compose up --force-recreate
```

---

## Dockerfile Breakdown

| Step | Purpose |
|------|---------|
| `FROM node:20-alpine` | Lightweight Node image |
| `COPY package.json` | Copy workspace config |
| `COPY apps/` | Copy app source |
| `npm install` | Install all dependencies (in Docker's network) |
| `npm run build` | Build web-ui to `dist/` |
| `serve -s dist` | Serve built app on port 3000 |

---

## Troubleshooting Docker

| Issue | Solution |
|-------|----------|
| `docker: command not found` | Install Docker Desktop or Engine |
| `Cannot connect to Docker daemon` | Run `sudo systemctl start docker` (Linux) |
| `Port 3000 already in use` | Run `docker ps`, find container, `docker stop <id>`, or use different port: `docker run -p 8000:3000 ...` |
| `npm install fails in Docker` | May be network issue with Docker's DNS; try `docker build --no-cache` |

---

## Next: Deploy to Server

Once Docker build succeeds locally, you can:

1. **Push to registry**:
   ```bash
   docker tag edupulse-web:latest myregistry/edupulse-web:latest
   docker push myregistry/edupulse-web:latest
   ```

2. **Deploy to production** (e.g., AWS, Azure, DigitalOcean):
   ```bash
   # On remote server
   docker pull myregistry/edupulse-web:latest
   docker run -d -p 80:3000 myregistry/edupulse-web:latest
   ```

---

## Alternative: Build Locally Without Docker

If you have npm installed on your machine:

```bash
cd ~/Edupulse/EdupulseAdmin

# Install once
npm install

# Build
npm run build

# Serve (with Node.js)
npm install -g serve
serve -s apps/web-ui/dist -l 3000
```

---

**Next Step**: Run one of the build methods above and verify UI renders correctly at http://localhost:3000
