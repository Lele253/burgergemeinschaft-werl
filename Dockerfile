# Stage 1: Build the Vue app
FROM node:14 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the Vue app with NGINX
FROM nginx:1.21

# Remove the default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Kopiere die NGINX-Konfiguration in den Container
COPY nginx.conf /etc/nginx/conf.d/

# Kopiere die gebauten Dateien aus dem ersten Stage in das NGINX-Verzeichnis
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 8090

CMD ["nginx", "-g", "daemon off;"]