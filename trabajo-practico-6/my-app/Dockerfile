FROM node:13.12.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:13.12.0-alpine
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["npm", "start"]