#!/bin/bash
# 🚀 EduPulse Quick Start — Copy & Paste Commands

echo "🔧 EduPulse Installation Helper"
echo "================================"
echo ""

# Detect OS
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macos"
else
    OS="unknown"
fi

echo "Detected OS: $OS"
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Install from: https://nodejs.org"
    exit 1
fi

echo "✅ Node $(node --version) found"
echo "✅ npm $(npm --version) found"
echo ""

# Change to project directory
cd "$(dirname "$0")" || exit 1

echo "📂 Working directory: $(pwd)"
echo ""

# Menu
echo "Choose installation method:"
echo ""
echo "  1) Local npm install (requires Node.js 18+)"
echo "  2) Docker (requires Docker Desktop)"
echo "  3) Docker Compose (web + backend)"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📦 Installing npm dependencies..."
        npm install --legacy-peer-deps || {
            echo "❌ npm install failed. Try:"
            echo "   npm cache clean --force"
            echo "   npm install --legacy-peer-deps"
            exit 1
        }
        echo "✅ Dependencies installed"
        echo ""
        echo "🏗️  Building web-ui..."
        cd apps/web-ui
        npm run build || {
            echo "❌ Build failed. Check errors above."
            exit 1
        }
        echo "✅ Build complete"
        echo ""
        echo "🚀 Starting dev server..."
        echo "   Open: http://localhost:5173"
        npm run dev
        ;;
    2)
        echo ""
        if ! command -v docker &> /dev/null; then
            echo "❌ Docker not found. Install from: https://docker.com"
            exit 1
        fi
        echo "✅ Docker $(docker --version)"
        echo ""
        echo "🔨 Building Docker image..."
        docker build -t edupulse-web:latest . || {
            echo "❌ Docker build failed"
            exit 1
        }
        echo "✅ Image built"
        echo ""
        echo "🚀 Running container..."
        echo "   Open: http://localhost:3000"
        docker run -p 3000:3000 -e VITE_API_BASE_URL=http://localhost:3001/api edupulse-web:latest
        ;;
    3)
        echo ""
        if ! command -v docker-compose &> /dev/null && ! command -v docker &> /dev/null; then
            echo "❌ Docker Compose not found"
            exit 1
        fi
        echo "✅ Docker Compose available"
        echo ""
        echo "🚀 Starting full stack (web + backend)..."
        echo "   Web UI: http://localhost:3000"
        echo "   Backend: http://localhost:3001"
        docker-compose up
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac
