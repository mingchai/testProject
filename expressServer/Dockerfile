FROM node
ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 9000
CMD [ "node", "index.js" ]