FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4010

ENV ADDRESS=0.0.0.0 PORT=4010

CMD ["npm", "start"]