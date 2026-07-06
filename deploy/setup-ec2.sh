#!/usr/bin/env bash
# One-time server setup for Ubuntu 22.04/24.04 EC2.
# Run as a sudo-capable user:  bash deploy/setup-ec2.sh
set -euo pipefail

echo "==> Installing Node.js 20..."
if ! command -v node >/dev/null || [[ "$(node -v)" != v2* ]]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

echo "==> Installing nginx + certbot..."
sudo apt-get update
sudo apt-get install -y nginx certbot python3-certbot-nginx

echo "==> Installing PM2..."
sudo npm install -g pm2

echo "==> Configuring nginx..."
sudo cp "$(dirname "$0")/nginx.conf" /etc/nginx/sites-available/niytri
sudo ln -sf /etc/nginx/sites-available/niytri /etc/nginx/sites-enabled/niytri
sudo nginx -t && sudo systemctl reload nginx

echo "==> Done. Next steps:"
echo "  1. cp .env.example .env && nano .env   (set ADMIN_API_KEY; M365 values optional)"
echo "  2. bash deploy/deploy.sh"
echo "  3. Point DNS: www.niytri.com and niytri.com A records -> this server's IP"
echo "  4. Get SSL:   sudo certbot --nginx -d www.niytri.com -d niytri.com"
