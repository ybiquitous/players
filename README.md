[![dependencies Status](https://david-dm.org/ybiquitous/players/status.svg)](https://david-dm.org/ybiquitous/players)

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
$ yarn test
$ yarn test:watch
```

## Run

```sh
$ yarn build
$ yarn start
```
