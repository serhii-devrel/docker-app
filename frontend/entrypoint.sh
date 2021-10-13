#!/bin/bash

echo "NODE_ENV IS: ${NODE_ENV}"

npm install

if [ $NODE_ENV = "development" ]; then
    npm run start
fi

if [ $NODE_ENV = "production" ]; then
    npm run build
    npm install -g serve
    serve -s build
fi