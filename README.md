# CCCTC App

This is loosely based on a TurboRepo starter that can be found [here](https://github.com/vercel/turborepo/tree/main/examples/with-docker)


## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `web`: a [React.js](https://react.dev/) app
- `api`: an [Express](https://expressjs.com/) server

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


### Local Dev

To get up and running run the following commands

```sh
pnpm i
pnpm dev
```

### Garden

This repo is configured to be built with Docker and Garden. To build and deploy all apps in this repo:

#### Run in local k8s cluster
1. Install Docker [(Docs)](https://www.docker.com/get-started/) and ensure local Kubernetes is enabled
1. Install Garden [(Docs)](https://docs.garden.io/getting-started/quickstart)
1. Run `garden deploy`
1. Open [http://ccctc-app.local.demo.garden/](http://ccctc-app.local.demo.garden/)

To shutdown all running containers:

```
garden cleanup deploy
```
