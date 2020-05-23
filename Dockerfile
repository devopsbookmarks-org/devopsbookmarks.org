FROM node:13
RUN mkdir /opt/devops
WORKDIR /opt/devops
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "/opt/devops/server.js" ]
