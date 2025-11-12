# Use Node.js 20 Alpine as base image (required for NestJS 11+) - Force rebuild v4
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Force no cache for all subsequent steps
ENV DOCKER_BUILDKIT=0
# Add timestamp to force rebuild
RUN echo "Build timestamp: $(date)" > /tmp/build-timestamp

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Clean any existing dist and prisma client directories to ensure clean build
RUN rm -rf dist node_modules/@prisma

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production && npm cache clean --force

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
