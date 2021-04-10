# first phase, to build our app
FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

RUN npm run build

# second phase, for nginx
# Expose 80 used by Elasticbeanstack to  expose port 80
FROM nginx
EXPOSE 80  
# Copy from the previous stage
# copy app/build to usr/share/nginx/html

COPY --from=builder /app/build /usr/share/nginx/html