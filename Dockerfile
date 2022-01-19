FROM node:14
RUN mkdir /opt/devops
WORKDIR /opt/devops
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
