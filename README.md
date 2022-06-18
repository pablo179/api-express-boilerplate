# Express app bolierplate

This is a bolierplate to create a new express app


## Start

Set the environment variables:

```bash
cp .env.example .env
# open .env and modify the environment variables (if needed)
```

### run proyect

Go to app directory

```bash
cd app
```

Install the dependencies:
```bash
npm install
```

```bash
yarn
```

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#EnvironmentVariables)

## Features
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)


## Commands

Running with nodemon watcher:

```bash
npm run dev
```
Running locally:

```bash
npm start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# fix prettier errors
yarn prettier:fix
```


## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000
#node env (only 'dev' and 'prod')
NODE_ENV=dev
```

## Project Structure

```
app\
  |--src\
    |--config\         # Environment variables and configuration related things
    |--middlewares\    # Custom express middlewares
    |--routes\         # Routes
    |--services\       # Functions and services for routes
    |--utils\          # Utility classes and functions
    |--app.js          # Express app
    |--index.js        # App entry point
```

## Error handling
The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

```javascript
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const User = require('../models/User');

const getUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
```