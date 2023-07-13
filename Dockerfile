# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy all the files to the container's working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Define the command to run when the container starts
CMD [ "node", "server.js" ]
