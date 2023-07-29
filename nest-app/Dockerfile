FROM node:18-alpine


RUN mkdir -p app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mpm run build

CMD ["npm","run","start:dev"]