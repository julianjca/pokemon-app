# Pokemon App
Deployment: 
- https://poke-app-six.vercel.app/ (Vercel was down, so I created a backup deployment)
- https://dreamy-neumann-69f9d5.netlify.app/

This app supports PWA.

## Pages
- Pokemons list (`/`)
- Pokemon detail page (`/pokemons/[name]`)
- My Pokemons page (`/my-pokemons`)

## Prerequisites

Things needed and how to install:
- npm (https://www.npmjs.com/get-npm) or yarn (https://classic.yarnpkg.com/en/docs/install/)
- node (installation guide https://nodejs.org/en/download/)

## Getting Started
First, install the dependencies
```bash
npm install
# or
yarn
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Running the tests
```
yarn test
or 
npm run test
```

To run with coverage:
```
yarn coverage
or 
npm run coverage
```


## Built With
- [Next.js](https://nextjs.org/) - Front end framework
- [Emotion](https://emotion.sh/docs/introduction) - Styling
- [Jest](https://jestjs.io/) - Testing
- [Testing Library](https://testing-library.com/) - Testing
- [Apollo](https://www.apollographql.com/docs/react/) - Data fetching