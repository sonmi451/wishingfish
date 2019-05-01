# Base image
FROM node

# create directory and build directory
RUN mkdir /usr/src/wishingfish
# set working directory

WORKDIR /usr/src/wishingfish

# add `/usr/src/wishingfish/node_modules/.bin` to $PATH
ENV PATH /usr/src/wishingfish/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/wishingfish/package.json
RUN npm install

# build app
#CMD ["npm", "run build"]

# start app
CMD ["npm", "start"]
