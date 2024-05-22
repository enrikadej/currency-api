# in order to build run 'docker build -t remote -f Docker/remote/Dockerfile .' from root dir

FROM node:18-alpine
WORKDIR /app

# Only copy the config files to work directory in order to install dependencies
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY nest-cli.json .

# Install all Packages
RUN npm install

# Copy all other source code to work directory
COPY . .
COPY ./dist ./dist
COPY migration /app/migration

# Start
CMD ["npm" "run" "start:dev"]
