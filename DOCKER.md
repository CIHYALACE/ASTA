# Docker Deployment Guide

This project is configured to run in an Ubuntu container on port 80, accessible from the outside world on port 11000.

## Quick Start

### Build and Run with Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at: `http://localhost:11000`

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t asta-react-app .

# Run the container
docker run -d -p 11000:80 --name asta-app asta-react-app

# View logs
docker logs -f asta-app

# Stop the container
docker stop asta-app
docker rm asta-app
```

## Port Configuration

- **Container Port**: 80 (internal)
- **Host Port**: 11000 (external)
- **Access URL**: `http://localhost:11000` or `http://your-server-ip:11000`

## Development

For local development, continue using:

```bash
npm run dev
```

This will run on port 5173 as configured in `vite.config.js`.

## Production Build

The Dockerfile uses a multi-stage build:
1. **Builder stage**: Uses Node.js to build the React application
2. **Production stage**: Uses Ubuntu with nginx to serve the built files

## Nginx Configuration

The nginx configuration (`nginx.conf`) includes:
- SPA routing support for React Router
- Gzip compression
- Static asset caching
- Security headers

## Troubleshooting

### Check if container is running
```bash
docker ps
```

### Check container logs
```bash
docker-compose logs asta-app
```

### Access container shell
```bash
docker exec -it asta-app bash
```

### Rebuild after code changes
```bash
docker-compose up -d --build
```

