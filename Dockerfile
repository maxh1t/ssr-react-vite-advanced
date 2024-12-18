# Install dependencies
FROM node:22-alpine as deps

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable
RUN pnpm install

# Build App
FROM node:22-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable
RUN pnpm build

FROM node:22-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "start"]
