FROM node:14.8.0-buster-slim

RUN apt-get update && apt-get install curl -y
ENV NODE_ENV development
COPY ./app /app 
WORKDIR /app
RUN chmod -R 777 /app 
EXPOSE 8080
HEALTHCHECK --interval=1s --timeout=1s --start-period=1s --retries=1 CMD curl -f http://localhost:8088/ || exit 1

CMD ["npm", "start"]