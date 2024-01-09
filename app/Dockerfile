FROM node:16-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN chown -R node:node /app/node_modules


COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]