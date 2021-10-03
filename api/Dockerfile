FROM node:13

WORKDIR /usr/src/app
COPY . .
RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["./entrypoint.sh"]