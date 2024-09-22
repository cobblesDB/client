# 가져올 이미지
FROM node:20

# 경로 설정
WORKDIR /app

#
COPY package*.json ./
RUN npm install
COPY . .

ENV REACT_APP_API_URL=ws://host.docker.internal:8080

EXPOSE 3000
CMD ["npm", "start"]