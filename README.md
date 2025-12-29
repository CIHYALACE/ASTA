# ASTA
Asta FrontEnd Using React Framework

## Development Mode

```bash
npm run dev
```
Runs on port 5173

## Production Mode

1. **Build the application:**
```bash
npm run build
```

2. **Start the production server:**
```bash
npm start
```

The app will run on **port 10000** (internal), mapped to **port 11000** (external).

### Quick Start (Production)

```bash
npm run build && npm start
```

## Port Configuration

- **Internal Port**: 10000
- **External Port**: 11000
- **Access URL**: `http://your-server-ip:11000`

## Notes

- Make sure port 10000 is available internally
- The app runs directly with Node.js/Vite
