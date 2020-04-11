FROM node:12
WORKDIR /usr/src/app/
COPY package.json .
RUN npm install
EXPOSE 3000 3000
COPY . .
CMD ["npm", "run", "start"]