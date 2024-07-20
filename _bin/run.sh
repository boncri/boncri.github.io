#!/bin/bash

docker run --rm --name boncri-github-io -d -v $(pwd):/usr/share/nginx/html -p 8000:80 nginx

echo "Server is running on port 8000..."
