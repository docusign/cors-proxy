# syntax=docker/dockerfile:1

FROM node:14.16.0

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]
