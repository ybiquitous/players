[![dependencies Status](https://david-dm.org/ybiquitous/players/status.svg)](https://david-dm.org/ybiquitous/players)
[![devDependencies Status](https://david-dm.org/ybiquitous/players/dev-status.svg)](https://david-dm.org/ybiquitous/players?type=dev)
[![Build Status](https://travis-ci.org/ybiquitous/players.svg)](https://travis-ci.org/ybiquitous/players)

# Players

## Install

```sh
$ yarn
```

## Setup Database (PostgreSQL):

```sh
$ psql postgres
postgres=> CREATE ROLE players WITH CREATEDB LOGIN PASSWORD 'play';
```

```sh
$ psql -U players postgres
postgres=> CREATE DATABASE players_development;
postgres=> CREATE DATABASE players_test;

$ yarn db:sync
```

## Develop

```sh
$ yarn dev
```

## Run

```sh
$ yarn build
$ yarn start
```

## Test

```sh
$ yarn test
$ yarn test:watch
```
