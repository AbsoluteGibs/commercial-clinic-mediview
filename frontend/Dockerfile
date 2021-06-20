FROM node:lts-alpine
WORKDIR /frontend
COPY package.json .
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]