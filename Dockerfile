# Use Node.js 20 Alpine as base image (required for NestJS 11+) - Force rebuild v3
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Clean any existing dist and node_modules directories to ensure clean build
RUN rm -rf dist node_modules/@prisma

# Ensure mock Prisma client is properly copied
RUN cp -r node_modules/@prisma . || mkdir -p node_modules/@prisma

# Prisma client is pre-generated in the image

# Build the application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production && npm cache clean --force

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
