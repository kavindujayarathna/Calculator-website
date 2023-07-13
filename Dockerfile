# Use an official Node.js runtime as the base image
FROM node:13-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Install the project dependencies
RUN npm install

# Define the command to run when the container starts
CMD [ "node", "server.js" ]
