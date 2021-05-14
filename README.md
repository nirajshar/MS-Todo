## Description

Todo microservice for user's todo having 

1. Todo CRUD

## Rest endpoints (JSON)

  1 : Todo 

    - [ POST ] Create TODO (Only allowed if user is registered & sign in)
    - [ GET ] Get All TODO's by User UUID
    - [ GET ] Get TODO by TODO UUID for User (with Relation User)
    - [ PUT ] Update TODO Details by TODO UUID for User (with Relation User)
    - [ DELETE ] Delete TODO by TODO UUID for User (with Relation User)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [Niraj Sharma](https://github.com/nirajshar)