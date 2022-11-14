# Hubla test

this project works with [Nestjs](https://nestjs.com/) as backend and [Next.js](https://nextjs.org/) as frontend

### backend
Backend project is located inside [api](./api) folder.
It is a nestjs project and follow the nestjs [documentation](https://docs.nestjs.com/).

### frontend
Frontend project is located inside [app](./app) folder.
It is a next.js project and follow the next.js [documentation](https://nextjs.org/docs/getting-started).

For the design system was use [Material-UI](https://mui.com/) react components

## install dependences 
this project is a monorepo project and works with [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/). So to install the dependencies install yarn in your node enviroment and run:
```bash
yarn install
```

## setup
each project have an .env file where you can setup for: 
- frontend [.env](./app/.env)
  - NEXT_PUBLIC_BACKEND_URL
- backend [.env](./api/.env)
  - DB_HOST
  - DB_PORT
  - DB_USERNAME
  - DB_PASSWORD
  - DB_DATABASE

## Running locally in development mode:

```bash
# start database instance with
docker-compose up   
# after mysql is running
yarn dev
# this command will run backend and frontend apps
```
after runs you can access http://localhost:3000 for frontend and http://localhost:3001/docs swagger docs

## Running unit tests:

```bash
# this command will run backend tests
yarn test:api
# or to run in watch mode
yarn test:api:watch

# this command will run front tests
yarn test:app
# or to run in watch mode
yarn test:app:watch
```

## For build:

```bash
# this command will run build for backend and frontend projects
yarn build
```
after build command runs. The builded file will be located on [api/dist](./api/dist) for backend and [app/.next](./app/.next) for frontend.
