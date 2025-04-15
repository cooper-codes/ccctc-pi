FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=api --prod /prod/api
RUN pnpm deploy --filter=web --prod /prod/web

FROM gcr.io/distroless/nodejs22-debian12 AS api
COPY --from=build /prod/api/node_modules /app/node_modules
COPY --from=build /prod/api/dist /app/dist
COPY --from=build /prod/api/package.json /app/package.json
WORKDIR /app
CMD ["./dist/index.js" ]

FROM base AS web
COPY --from=build /prod/web /prod/web
WORKDIR /prod/web
CMD [ "pnpm", "start" ]