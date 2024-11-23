# Use Node.js base image for the build stage
FROM node:20.18.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire frontend application code to the container
COPY . .

# Build the frontend application (output will be placed in the dist directory)
RUN npm run build

# Use a lightweight Nginx image for serving static files
FROM nginx:1.26.2

# Copy the built static files from the previous stage to the Nginx default html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Optionally copy a custom Nginx configuration file for frontend routing (if needed)
COPY default.conf /etc/nginx/conf.d/default.conf

# Set Up Timezone
ENV TZ=Pacific/Auckland

# Expose Nginx's default port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
