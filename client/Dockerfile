# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built app with Nginx
FROM nginx:stable-alpine

# Copy the built static files from the 'builder' stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (Nginx's default port)
EXPOSE 80

# When the container starts, run Nginx
CMD ["nginx", "-g", "daemon off;"]