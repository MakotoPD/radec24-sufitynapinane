# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.33.0 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=build /app/.output ./.output
COPY --from=build /app/server/db/migrate.mjs ./server/db/migrate.mjs
COPY --from=build /app/server/db/migrations ./server/db/migrations
COPY --from=build /app/node_modules/drizzle-orm ./node_modules/drizzle-orm
COPY --from=build /app/node_modules/postgres ./node_modules/postgres

EXPOSE 3000
CMD ["sh", "-c", "node server/db/migrate.mjs && node .output/server/index.mjs"]
