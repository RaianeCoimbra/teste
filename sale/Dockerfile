FROM node:18-alpine
    
    # Set the working directory inside the container
    WORKDIR /app
    
    # Copy package.json and package-lock.json to the container
    COPY package*.json ./
    
    # Install the application's dependencies
    RUN npm install
    
    # Copy the rest of the application source code to the container
    COPY . .
    
    # Setting environment variables
    ENV PORT=5000
    ENV USERNAME=undefined
    ENV PASSWORD=undefined
    ENV qip=qip123

    # Expose the port on which the Express.js application will listen
    EXPOSE 5000
    
    # Command to start the application when the container is launched
    CMD [ "node", "src/index.js" ]