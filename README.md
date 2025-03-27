# Rick and Morty challenge

## Live
The web is live [here](https://67e575a42d520b00a4a572e6--upbeat-jepsen-fe697b.netlify.app/)

## Comands
To run the application:
```console
npm run start
```

To run tests:
```console
npm run test
```

To generate a build:
```console
npm run build
```

## API
The API used is Rick and Morty. You can read [the documentation here](https://rickandmortyapi.com/)

## Technologies
- React: Library used for the whole application
- Styled Components: For styling
- Jest & testing-library: For testing
- React Query: To cache responses

## Architecture
<pre>
├───src
|   app.tsx: file responsible for rendering pages
|   GlobalStyles.tsx: global styles
|   index.tsx: the root app
│   ├───components: React components used in pages
│   │   ├───Card
│   │   ├───Filter
│   │   ├───Header
│   │   ├───Layout
│   │   ├───Order
│   │   └───Spinner
│   ├───models: interfaces
│   └───pages: Pages made with React used for the routes
│       ├───Detail
│       └───Home
│   └───services: API calls
</pre>

