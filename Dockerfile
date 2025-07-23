FROM node:18-alpine as builder
WORKDIR /app
RUN npm install -g json-server
COPY db.json .
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--port", "3000"]