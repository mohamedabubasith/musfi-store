FROM node:20 AS builder
WORKDIR /app

RUN npm install -g pnpm@10.33.0

COPY package.json .npmrc ./
RUN pnpm install

COPY . .
RUN pnpm build

# ---- Runner ----
FROM node:20-slim AS runner
WORKDIR /app

RUN npm install -g pnpm@10.33.0

COPY --from=builder /app /app

ENV NODE_ENV=production
ENV PORT=9000

EXPOSE 9000

# Auto-runs DB migrations then starts the server
CMD ["sh", "-c", "node_modules/.bin/medusa db:migrate && node_modules/.bin/medusa start"]
