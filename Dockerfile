#STAGE 1
FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

EXPOSE 4200

CMD ["npm", "start"]

#STAGE 2
#FROM nginx:latest
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/front-wise-student /usr/share/nginx/html
