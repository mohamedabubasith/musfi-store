FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat python3 make g++ wget curl
RUN npm install -g pnpm@10.33.0

# ---- Builder ----
FROM base AS builder
WORKDIR /app

COPY package.json .npmrc ./
RUN pnpm install --frozen-lockfile 2>/dev/null || pnpm install

COPY . .
RUN pnpm build

# ---- Runner ----
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat wget curl
RUN npm install -g pnpm@10.33.0

WORKDIR /app

COPY --from=builder /app /app

ENV NODE_ENV=production
ENV PORT=9000

EXPOSE 9000

# Runs DB migrations automatically then starts the server
CMD ["sh", "-c", "node_modules/.bin/medusa db:migrate && node_modules/.bin/medusa start"]
