FROM node:lts-alpine

RUN apk add --update --no-cache openssl1.1-compat

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 3006

ENV PORT 3006

CMD npm start
