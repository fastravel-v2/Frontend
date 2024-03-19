# 가져올 이미지를 정의
FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 5173

CMD ["npm", "start"]