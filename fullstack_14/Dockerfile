FROM node
WORKDIR './app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9881
CMD ["npm","start"]