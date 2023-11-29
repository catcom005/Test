# Use an official Node runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, yarn.lock, and other necessary files to the working directory
COPY package*.json yarn.lock ./

# Install app dependencies using Yarn
RUN yarn install --pure-lockfile

# Copy the application code to the container
COPY . .

# Build the TypeScript code
RUN yarn build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the application
CMD ["yarn", "start"]