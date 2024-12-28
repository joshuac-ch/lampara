FROM node:20-alpine

WORKDIR /trabajo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node" , "app.js" ]