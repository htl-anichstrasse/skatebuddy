FROM node:alpine

WORKDIR /home/app/
COPY server/src .
COPY server/package.json .
COPY server/.env_template ./.env

RUN npm i

EXPOSE 80
CMD ["node", "server.js"]
