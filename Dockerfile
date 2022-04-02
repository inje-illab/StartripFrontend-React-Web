FROM node:latest as build
WORKDIR /app

COPY package.json .
RUN yarn set version berry

COPY yarn.lock .yarn .yarnrc.yml ./
RUN yarn install
COPY . .

CMD ["yarn", "run", "start"]