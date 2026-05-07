FROM node:20-alpine AS builder

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:20-alpine AS runner

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/medusa-config.* ./

EXPOSE 9000

CMD ["sh", "-c", "npx medusa db:migrate && npx medusa start"]