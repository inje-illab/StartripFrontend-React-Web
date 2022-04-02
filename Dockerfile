FROM node:latest as build
WORKDIR /app

COPY package.json .
RUN yarn set version berry

COPY yarn.lock .yarn .yarnrc.yml ./
RUN yarn add react-scripts
RUN yarn
COPY . .

CMD ["yarn", "start"]