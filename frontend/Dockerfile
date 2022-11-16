FROM node

WORKDIR /dsmeta

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
