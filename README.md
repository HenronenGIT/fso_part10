# Fullstack Open Part 10 - Mobile Development with React Native

## Introduction

This repository contains project and exercises for Part 10 of the Fullstack Open course, focused on mobile development using React Native.

Server side code was provided to us, and it is located in `server` folder.

## Technologies used

- React Native: A framework for building native apps using React.
- Expo: An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- Apollo client: JavaScript stage management library
- GraphQL: Query language for APIs
- Jest: Testing framework
- ESLint: Code linter
- React Native Debugger: Tool made to debug React Native applications

## Concepts learned

- Form, and stage managing
- Components
- Stylings
- Platform-specific code
- Routing
- Locally stored data
- Testing
- Infinity scrolling
- Cursor-based pagination
- Debouncing
- React Composition with Props `<ReviewItem/>`

## Project Structure

- `src/components`: This folder contains all of the self-made components
- `src/__tests__`: This folder contains all of the tests
- `src/graphl`: Queries, and mutations for to the backend
- `src/hooks`: Custom hooks
- `src/utils`: Utility and helper functions
- `src/components/Main.js`: Main routing file
- `App.js`: The main entry point of the application.

## Setup and Running

Provide instructions on how to set up and run the project locally. For example:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/fullstackopen-part10.git
   ```

2. Install dependencies for client, and server side:
    ```
    § fso_part10/client npm install
    ```
    ```
    § fso_part10/server npm install
    ```

3. Start the server in development:

    ```
    § fso_part10/server npm run start:dev
    ```

4. Launch React Native Debugger:

    `CMD + T`
    Use the port: 19000

5.  Launch the client:

    ```
    § client expo start
    ```

6. Copy the IP address on your `.env` file:

    `APOLLO_URI=http://{INSERT IP HERE}:4000/graphql`

7. Launch iOS simulator:

    press i


**Happy coding!**
