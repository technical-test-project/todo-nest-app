<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Overview

This is a Node.js application using [NestJS](https://github.com/nestjs/nest) with TypeScript. The application integrates with TypeORM for database management and uses MySQL for database.
The setup supports hot reloading with `ts-node` for a smooth development experience.

## API Endpoint


| Method | url                      | Description            |
|--------|--------------------------|------------------------|
| POST   | /login                   | Request Token          |
| POST   | /register                | Register               |
| GET    | /checklist               | Get All Checklist      |
| POST   | /checklist               | Create new checklist   |
| DELETE | /checklist/{checklistId} | Delete checklist by ID |



## Prerequisites

- Node.js (v20 or higher)
- npm (or Yarn)
- Database : MySQL (using with Laragon)
- Packages Installed
    - @nestjs/config
    - @nestjs/jwt
    - @nestjs/typeorm
    - typeorm
    - mysql2
    - zod (Object Schema Validation)

## Setup Environment

```bash
# copy Environment Example to Environment project
$ cp .env.example .env
```

## Create Database (MySQL)
Create Database on Your Local Computer <br>
You can see in the [.env](./.env) file
```bash
# DB_DATABASE=YOUR_DB_NAME
```

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

## Migration

```bash
# running the migration
$ npm run migration:run

# show the list of migrations
$ npm run migration:show

# create new migration
$ npm run migration:create --name=MigrationName

# generate new migration
$ npm run migration:generate --name=MigrationName

# revert the migration
$ npm run migration:revert
```


## Running the Unit Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Alvin Setiawan](https://bit.ly/alvinsetiawan-portfolio)

## License
Nest is [MIT licensed](LICENSE).
