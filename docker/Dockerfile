# Use the official Node.js image as the base image
FROM node:20

COPY ./app /home/app

# Set the working directory inside the container
WORKDIR /home/app

# Install the application dependencies
RUN npm install

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]
