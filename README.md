# Reffering

## Overview

Reffering, an useful bookmark web application for my own use.

This project is based on dockerizing.

---

# Client
Reffering client built on [create-react-app](https://github.com/facebook/create-react-app).

## Using
- Typescript
- React
- styled-component
- eslint
- prettier

---

# Server

## using
- Typescript
- Express
- fp-ts
- io-ts
- prettier
- typeorm
- mysql

## Run Server

NOTE: 
- I assume you have already installed docker.
- You SHOULD run commands below in the root of 'server' directory.

## For production

First of all, install dependencies.

```
npm install
```

Create a network.

```
docker network create reffering-net
```

Pull mysql:5.7 image and then run mysql container

```
docker pull mysql:5.7
```
```
docker run --network reffering-net --name reffering-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=reffering -d mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

Build docker image for reffering server.

```
docker build --tag reffering .
```

Run reffering server container.

```
docker run --network reffering-net --name reffering-server -p 3000:3000 -d reffering
```

That's it. Now you can access to localhost:3000 for using API.