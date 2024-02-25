# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files
COPY . .

# Expose a port (if your application requires it)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]