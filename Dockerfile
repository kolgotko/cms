FROM node:latest

WORKDIR /usr/local/share/app

RUN npm install -g yarn

COPY . /usr/local/share/app

RUN yarn install
RUN yarn run build

CMD yarn run start
