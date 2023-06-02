FROM node:lts-alpine

USER root

COPY package*.json ./

RUN mkdir /home/node/app

WORKDIR /home/node/app

CMD /bin/sh
