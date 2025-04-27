FROM node:20

WORKDIR  /usr/src/app

COPY package*.json ./
COPY yarn*.lock ./

RUN npm install --only=production

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]