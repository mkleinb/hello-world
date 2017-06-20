#!/bin/bash

export tag=$(docker build -t hello-world . | grep 'Successfully built' | tail -c 13)

echo $tag

docker tag $tag mikarinneoracle/hello-world:latest

docker push mikarinneoracle/hello-world

#docker run -it --rm -p 3000:3000 mikarinneoracle/hello-world:latest
