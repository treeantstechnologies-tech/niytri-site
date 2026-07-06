#!/usr/bin/env bash
# One-time server setup for Ubuntu 22.04/24.04 EC2.
# Run as a sudo-capable user:  bash deploy/setup-ec2.sh
set -euo pipefail

echo "==> Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "==> Installing nginx, certbot, postgres..."
sudo apt-get update
sudo apt-get install -y nginx certbot python3-certbot-nginx postgresql postgresql-contrib

echo "==> Installing PM2..."
sudo npm install -g pm2

echo "==> Creating Postgres database and user..."
DB_PASS=$(openssl rand -hex 16)
sudo -u postgres psql <<SQL
DO \$\$ BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'niytri') THEN
    CREATE ROLE niytri LOGIN PASSWORD '${DB_PASS}';
  END IF;
END \$\$;
SELECT 'CREATE DATABASE niytri OWNER niytri' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'niytri')\gexec
SQL

echo ""
echo "=========================================================="
echo "Postgres ready. Put this in your .env:"
echo "DATABASE_URL=postgres://niytri:${DB_PASS}@localhost:5432/niytri"
echo "=========================================================="
echo ""

echo "==> Configuring nginx..."
sudo cp "$(dirname "$0")/nginx.conf" /etc/nginx/sites-available/niytri
sudo ln -sf /etc/nginx/sites-available/niytri /etc/nginx/sites-enabled/niytri
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

echo "==> Done. Next steps:"
echo "  1. Point DNS: www.niytri.com and niytri.com A records -> this server's IP"
echo "  2. Get SSL:   sudo certbot --nginx -d www.niytri.com -d niytri.com"
echo "  3. Deploy:    bash deploy/deploy.sh   (from the app directory)"
