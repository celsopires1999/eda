FROM node:20.5.1-slim

RUN npm install -g npm@9.8.0

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]
