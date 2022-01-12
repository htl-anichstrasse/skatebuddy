FROM node:alpine

WORKDIR /home/app/
COPY src .
COPY package.json .

RUN npm i

EXPOSE 80
CMD ["node", "src/server.js"]
