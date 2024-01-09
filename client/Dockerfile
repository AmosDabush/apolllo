# pull official base image
FROM node:16.15.1-alpine

# set working directory
RUN mkdir /app && chown node:node /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
USER node
COPY --chown=node:node package.json yarn.lock* ./
# COPY package-lock.json ./
RUN yarn
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY --chown=node:node . .

# start app
CMD ["npm", "start"]