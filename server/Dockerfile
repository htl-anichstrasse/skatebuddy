FROM node:alpine

WORKDIR /home/app/
COPY server/src .
COPY server/package.json .

RUN npm i

EXPOSE 80
CMD ["node", "src/server.js"]
