# Use official Node.js image as base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY backend/package.json backend/package-lock.json /app/
RUN npm install

# Copy the backend code
COPY backend/ /app/

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
