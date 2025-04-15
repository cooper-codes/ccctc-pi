FROM node:22-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g corepack
RUN corepack cache clean
RUN corepack enable pnpm
WORKDIR /app
COPY . .

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=api --prod /prod/api

FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
# COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist .

# ARG PORT=3001
# EXPOSE ${PORT}
CMD [ "node", "./dist/index.js" ]
