# Basis Theory Developer Documentation

The [Basis Theory](https://basistheory.com/) developer documentation. This site is hosted at [developers.basistheory.com](https://developers.basistheory.com/)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server at http://localhost:3000/ and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Git Pre-commit Hook

This repository includes a git pre-commit hook that prevents commits containing the string `flock-dev.com` in any file under the "docs" directory. This helps ensure that development domain references don't accidentally make it into the documentation.

The hook is automatically installed when you run `npm install` or `yarn install` thanks to the [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) package.

If your commit is rejected due to this hook, you'll need to remove or replace all instances of `flock-dev.com` in the docs directory before committing.
