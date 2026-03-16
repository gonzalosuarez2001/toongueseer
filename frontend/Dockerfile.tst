FROM node:24-slim

WORKDIR /app

RUN apt-get update && apt-get install -y build-essential

COPY package*.json ./
COPY app/ ./

RUN npm install
RUN npx prisma generate

COPY entrypoint.*.sh ./
RUN chmod +x entrypoint.*.sh

ENV NEXT_PUBLIC_MAX_DIFFICULTY=7

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN echo "DB URL: $DATABASE_URL"

RUN npm run build