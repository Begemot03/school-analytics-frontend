FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules package-lock.json && npm install --legacy-peer-deps
COPY . .
RUN npm run build
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
