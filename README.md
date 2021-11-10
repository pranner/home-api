<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

Home Api test code Sample. Here you will see a few snippets of code that can be used to create an API to connect homebuyers to homes.

## Requirements

[Node.js version 12.14.X (includes npm 6.13.X)](https://nodejs.org/en/download/)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docs + Trying out the App

API Docs have been added with the help of Swagger.

After starting the app, navigate to the url below to see the controllers and data objects in this app. 

You can also make requests and try out the app with Swagger. 

```bash
http://localhost:3000/api-docs/
```

Sample Home Data -- modify for create new homes endpoint
```json
{
  "uuid": "c763e33f-c8d4-4f5b-b296-a833774a4a68",
  "name": "Newest Home",
  "address": "425 Homer St, TORONTO, ON",
  "description": "My newest home wow",
  "type": "Duplex",
  "bedrooms": 2,
  "bathrooms": 1,
  "size": 1440,
  "parking": "Double Garage Attached",
  "active": true
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
