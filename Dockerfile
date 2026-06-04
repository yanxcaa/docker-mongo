FROM node:22 AS builder
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22 AS runner
WORKDIR /home/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /home/app/dist ./dist
EXPOSE 3000
CMD [ "npm", "start" ]