FROM node:18-alpine

WORKDIR /usr

COPY package.json .
RUN yarn install

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 8080

CMD ["yarn", "run", "dev"]
