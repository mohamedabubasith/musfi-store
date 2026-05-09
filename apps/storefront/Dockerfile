FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat curl
RUN npm install -g pnpm@10.33.0

# ---- Builder ----
FROM base AS builder
WORKDIR /app

COPY package.json ./
RUN pnpm install --frozen-lockfile 2>/dev/null || pnpm install

COPY . .

# Next.js NEXT_PUBLIC_* vars must be set at BUILD time
ARG NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://api.musfi.basivo.in
ARG NEXT_PUBLIC_DEFAULT_REGION=in
ARG NEXT_PUBLIC_BASE_URL=https://musfi.basivo.in

ENV NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=$NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_MEDUSA_BACKEND_URL=$NEXT_PUBLIC_MEDUSA_BACKEND_URL
ENV NEXT_PUBLIC_DEFAULT_REGION=$NEXT_PUBLIC_DEFAULT_REGION
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

RUN pnpm build

# ---- Runner ----
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat curl
RUN npm install -g pnpm@10.33.0

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8000

COPY --from=builder /app /app

EXPOSE 8000

CMD ["pnpm", "start"]
