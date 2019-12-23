# TypeScript Node Server Starter

References:

- [Buletproof Node](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf)
- [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter.git)

# Getting started

- Install dependencies

```
yarn
```

- Build and run the project

```
yarn run build
yarn start
```

If you're using VS Code:

- you can use debugger launch task "Build and Debug" to build project, run and attach debuggger at once. Just press `F5` to launch.
- you can use `cmd + shift + b` to run the default build task (which is mapped to `npm run build`), and then you can use the command palette (`cmd + shift + p`) and select `Tasks: Run Task` > `npm: start` to run `npm start` for you.

# Organizaiton

The architecture is split in 3 layers:

- Controllers (this is the API, the express entry point)
- Services (this part contains the business logic)
- Models (it is the Data layer, should be responsible for communicating with DB and other APIs)
