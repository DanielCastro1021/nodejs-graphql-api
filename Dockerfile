# Use the official Node.js image as the base image
FROM node:14

# Create a directory for the app
RUN mkdir -p /home/node/node_modules && chown -R node:node /home/node

# Set the working directory
WORKDIR /home/node

# Copy package.json and package-lock.json
COPY package*.json ./

# Change the user to node
USER node

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY --chown=node:node . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD ["node", "./app/server.js"]