FROM node:10.14-alpine

ENV NODE_ENV production

ADD . /opt/app

WORKDIR /opt/app

RUN npm install

EXPOSE 7000

CMD ["node", "index.js"]
