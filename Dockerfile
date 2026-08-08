FROM node:22
RUN mkdir /opt/devops
WORKDIR /opt/devops
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
