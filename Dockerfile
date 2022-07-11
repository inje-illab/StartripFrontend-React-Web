FROM node:latest as build

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install
RUN yarn add react-scripts
COPY ./ ./

CMD ["yarn", "start"]