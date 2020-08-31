FROM node:12.18.3-alpine3.11

WORKDIR /home/app

RUN npm i -g @nestjs/cli@7.5.1

COPY . /home/app

RUN npm install

RUN npm run build

EXPOSE 3000



ENTRYPOINT ["node","dist/main"] 