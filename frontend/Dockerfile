# Use an official node image as a base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Set the command to serve the application
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
