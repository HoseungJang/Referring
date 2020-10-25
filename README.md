# Referring

## Overview

Referring, an useful bookmark web application for my own use.

This project is based on dockerizing.

Referring은 나만의 북마크 웹 애플리케이션입니다.

Dockerizing에 기반하여 개발하였습니다.

---

# Client
Referring client built on [create-react-app](https://github.com/facebook/create-react-app).

Referring의 client는 [create-react-app](https://github.com/facebook/create-react-app)에 기반하여 만들어졌습니다.

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

주의사항:
- 여러분이 이미 Docker를 설치하셨다고 가정합니다.
- 꼭 server 디렉토리 내에서 아래의 커맨드를 실행하셔야 합니다.

## For production

First of all, install dependencies.

첫 번째로, 의존 라이브러리들을 설치해줍니다.

```
npm install
```

Create a network.

그리고 network를 만들어주세요.

```
docker network create referring-net
```

Pull mysql:5.7 image and then run mysql container

mysql 5.7 이미지를 다운로드 해주시고, mysql 컨테이너를 실행해주세요.

```
docker pull mysql:5.7
```
```
docker run --network referring-net --name referring-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=referring -d mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

Build docker image for referring server.

Referring 백엔드가 실행되기 위한 도커 이미지를 빌드해주세요.

```
docker build --tag referring .
```

Run referring server container.

위에서 빌드한 이미지를 컨테이너로 실행해줍시다.

```
docker run --network referring-net --name referring-server -p 3000:3000 -d referring
```

That's it. Now you can access to localhost:3000 for using API.

끝났습니다! API를 사용하기 위해선 localhost:3000으로 접근하시면 됩니다.
