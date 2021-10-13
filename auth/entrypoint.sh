#!/bin/bash

echo "NODE_ENV IS: ${NODE_ENV}"

npm install

if [ $NODE_ENV = "development" ]; then
    npm run dev
fi

if [ $NODE_ENV = "production" ]; then
    npm run start
fi