# SWAR

SWAR stands for Star Wars Application React. This project was created as an exercise with practice and learning purposes only (well, having fun is valid too). The main idea is to write from scracth a React application that is Server Side Rendered and consumes data from a GraphQL server. There is a public REST API ([Swapi](https://swapi.dev/)) that exposes a lot of data of Star Wars movies which is used by [Swapi Graph](https://swapi.graph.cool/) to expose a GraphQL server with the same data. That is the one being consumed in this project.
This project is focused in functionality for the moment. Desing is not in the scope yet, but will be in the future.

## How to run

After cloning this repo, navigate to the root directory and run `yarn` to install all the dependencies.

There are 2 available scripts: `build` and `start`.

To start the project in `development` mode:
`yarn start`

There are some optimizations available in `production` mode (minification, compression, caching, etc...). To run in `production` mode:
`ENV=production yarn build`
`ENV=production yarn start`

In both cases you'll need to open http://localhost:3000/ with your favorite browser.
