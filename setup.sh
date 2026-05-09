#!/bin/bash
set -e

echo "Setting up Musfi Store..."

check_command() {
  if ! command -v "$1" &> /dev/null; then
    echo "ERROR: $1 is required but not installed."
    exit 1
  fi
}

check_command node
check_command pnpm
check_command psql

NODE_VERSION=$(node -v | sed 's/v//' | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
  echo "ERROR: Node.js 20+ is required. Current: $(node -v)"
  exit 1
fi

echo "Node.js $(node -v) OK"
echo "pnpm $(pnpm -v) OK"

if ! pg_isready -h localhost -q 2>/dev/null; then
  service postgresql start 2>/dev/null || true
  sleep 2
fi

if ! redis-cli ping > /dev/null 2>&1; then
  service redis-server start 2>/dev/null || true
  sleep 1
fi

sudo -u postgres psql -c "CREATE USER medusa WITH PASSWORD 'medusa_password' CREATEDB;" 2>/dev/null || true
sudo -u postgres psql -c "CREATE DATABASE musfi_store OWNER medusa;" 2>/dev/null || true

pnpm install
cd apps/backend && node_modules/.bin/medusa db:migrate
cd ../..

echo ""
echo "Setup complete!"
echo "  Backend:    cd apps/backend && pnpm dev    -> http://localhost:9000/app"
echo "  Storefront: cd apps/storefront && pnpm dev -> http://localhost:8000"
echo "  Admin login: admin@musfistore.com / admin123"
