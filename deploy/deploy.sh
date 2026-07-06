#!/usr/bin/env bash
# Deploy/redeploy the app. Run on the EC2 server from the app directory:
#   cd ~/niytri-site && bash deploy/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -f .env ]; then
  echo "ERROR: .env not found. Copy .env.example to .env and fill it in first."
  exit 1
fi

echo "==> Installing dependencies..."
npm ci --no-audit --no-fund 2>/dev/null || npm install --no-audit --no-fund

echo "==> Type checking..."
npm run check

echo "==> Building client + server..."
npm run build

echo "==> Starting/reloading with PM2..."
mkdir -p logs data/enquiries
pm2 startOrReload ecosystem.config.cjs
pm2 save

echo "==> Deployed. Check status: pm2 status | pm2 logs niytri-site"
