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

$ yarn db:migrate
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
