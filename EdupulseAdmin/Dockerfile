FROM node:20-alpine

WORKDIR /app

# Copy workspace config
COPY package.json package-lock.json* ./

# Copy app packages
COPY apps/ ./apps/

# Install dependencies
RUN npm install --legacy-peer-deps

# Build web-ui
WORKDIR /app/apps/web-ui
RUN npm run build

# Expose built artifacts
EXPOSE 3000

# Serve built app
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
