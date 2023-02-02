FROM node:19.5-alpine as build

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install -D

COPY . /app
RUN npm run generate


FROM nginx:1.23.3-alpine-slim

COPY --from=build /app/.output/public /app
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
