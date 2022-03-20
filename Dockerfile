FROM node:17-alpine3.12 AS base
WORKDIR /app

FROM node:17-alpine3.12 AS build
WORKDIR /app
COPY ./package.json ./package-lock.json ./tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN npm run build
ENTRYPOINT [ "node", "dist/index.js" ]

FROM base AS final
WORKDIR /app
COPY --from=build /app/dist .
COPY --from=build /app/node_modules ./node_modules
ENTRYPOINT [ "node", "index.js" ];