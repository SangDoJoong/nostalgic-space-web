cp package.json docker/

docker build \
    -t nostalgic-space-web:latest \
    --file docker/Dockerfile \
    .

rm docker/package.json