FROM node:16-alpine3.11

WORKDIR /usr/src/app
COPY . .
RUN apk update && apk add bash 
RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "bash", "-c", "./entrypoint.sh" ]