FROM node:8

LABEL name "Dynasystem Exercises"

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80
CMD ["npm", "start"]
