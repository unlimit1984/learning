#FROM node:20-alpine as angular
#
#WORKDIR /app
#
#COPY . .
#RUN npm i
#RUN npm run build
#
#FROM httpd:alpine3.19
#
#WORKDIR /usr/local/apache2/htdocs
#COPY --from=angular /app/dist/test-app .

FROM node:20-alpine as angular
WORKDIR /app
#COPY package*.json ./
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY --from=angular /app/dist/test-app/browser /usr/share/nginx/html
EXPOSE 80