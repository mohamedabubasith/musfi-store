#!/bin/bash
set -e

echo "🛍️  Setting up Musfi Store..."
echo ""

# Check required tools
check_command() {
  if ! command -v "$1" &> /dev/null; then
    echo "❌ $1 is required but not installed."
    exit 1
  fi
}

check_command node
check_command pnpm
check_command psql

# Check Node.js version
NODE_VERSION=$(node -v | sed 's/v//' | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
  echo "❌ Node.js 20+ is required. Current version: $(node -v)"
  exit 1
fi

echo "✅ Node.js $(node -v)"
echo "✅ pnpm $(pnpm -v)"

# Start PostgreSQL and Redis if not running
if ! pg_isready -h localhost -q 2>/dev/null; then
  echo "▶️  Starting PostgreSQL..."
  service postgresql start 2>/dev/null || true
  sleep 2
fi

if ! redis-cli ping > /dev/null 2>&1; then
  echo "▶️  Starting Redis..."
  service redis-server start 2>/dev/null || true
  sleep 1
fi

echo "✅ PostgreSQL is running"
echo "✅ Redis is running"

# Create database if it doesn't exist
echo "▶️  Setting up database..."
sudo -u postgres psql -c "CREATE USER medusa WITH PASSWORD 'medusa_password' CREATEDB;" 2>/dev/null || true
sudo -u postgres psql -c "CREATE DATABASE musfi_store OWNER medusa;" 2>/dev/null || true
echo "✅ Database 'musfi_store' is ready"

# Install dependencies
echo "▶️  Installing dependencies..."
pnpm install

# Run database migrations
echo "▶️  Running database migrations..."
cd apps/backend && node_modules/.bin/medusa db:migrate
cd ../..

echo ""
echo "✅ Musfi Store setup complete!"
echo ""
echo "To start all services:"
echo "  Terminal 1 (Backend):    cd apps/backend && pnpm dev"
echo "  Terminal 2 (Storefront): cd apps/storefront && pnpm dev"
echo ""
echo "URLs:"
echo "  Admin Dashboard:  http://localhost:9000/app"
echo "  Storefront:       http://localhost:8000"
echo "  Backend API:      http://localhost:9000"
echo ""
echo "Admin credentials:"
echo "  Email:    admin@musfistore.com"
echo "  Password: admin123"
