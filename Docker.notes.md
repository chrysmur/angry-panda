## Moving node_modules to the docker app
- remove the node_modules in the local file and
- run docker build -f Dockerfile.dev .
> It creates node_modules upon running npm i in the /app


## Ensure that changes to the local files are reflected in the docker container app
- docker run -p 80:8000 -v /app/node_modules -v $(pwd):/app 3242bed23
 > We map the volumes  in the /app to our local 