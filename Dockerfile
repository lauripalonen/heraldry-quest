FROM node:23.11.0 

EXPOSE 3000

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
