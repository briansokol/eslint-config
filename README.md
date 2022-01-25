# @bsokol/eslint-config

[![npm Version](https://img.shields.io/npm/v/@bsokol/eslint-config)](https://www.npmjs.com/package/@bsokol/eslint-config)
[![License](https://img.shields.io/npm/l/@bsokol/eslint-config)](https://raw.githubusercontent.com/briansokol/eslint-config/master/LICENSE)
[![Monthly Downloads](https://img.shields.io/npm/dm/@bsokol/eslint-config)](https://www.npmjs.com/package/@bsokol/eslint-config)
[![Known Vulnerabilities](https://snyk.io/test/github/briansokol/eslint-config/badge.svg?targetFile=package.json)](https://snyk.io/test/github/briansokol/eslint-config?targetFile=package.json)

I created this library to make it easier for me to stand up a new project. It uses sensible recommended defaults, in addition to some of my personal preferences. You can override the various rules by altering your ESLint config file.

This project uses itself for linting and formatting.

## Documentation

The full list of activated rules can be found [here](docs).

This library adheres to semantic versioning. This means that any change to a rule could be a breaking change for your projects. Therefore, any rule changes will be published as a new major version.

## Prerequisites

You must install the following peer dependencies:

-   ESLint @ `^8`
-   Prettier @ `>=2`
-   TypeScript @ `>=4`

The exact versions may depend on your existing installation or needs. Here are example commands to install the latest versions:

```bash
npm install eslint@^8 prettier typescript --save-dev
```

```bash
yarn add eslint@^8 prettier typescript --dev
```

## Installation

```bash
npm install @bsokol/eslint-config --save-dev
```

```bash
yarn add @bsokol/eslint-config --dev
```

## React + TypeScript

This will configure ESLint with the following presets/plugins:

-   [TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
-   [Prettier](https://github.com/prettier/eslint-config-prettier)
-   [React](https://github.com/yannickcr/eslint-plugin-react)
-   [React hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
-   [JSX a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme)
-   [Browserslist compatibility](https://github.com/amilajack/eslint-plugin-compat)

The list of configured rules can be found [here](docs/react-typescript.md).

### ESLint Configuration

Create a file called `.eslintrc.js` (or the [file format](https://eslint.org/docs/user-guide/configuring#using-configuration-files-1) of your choosing) with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-typescript'],
};
```

## Node + TypeScript

This will configure ESLint with the following presets/plugins:

-   [TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
-   [Node](https://github.com/mysticatea/eslint-plugin-node)
-   [Prettier](https://github.com/prettier/eslint-config-prettier)

The list of configured rules can be found [here](docs/node-typescript.md).

### ESLint Configuration

Create a file called `.eslintrc.js` (or the [file format](https://eslint.org/docs/user-guide/configuring#using-configuration-files-1) of your choosing) with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/node-typescript'],
};
```

## React Native + TypeScript

_NOTE:_ This configuration is **EXPERIMENTAL**. I haven't had a chance to really use it in a React Native project. The plugin is configured and rules are set to sensible defaults. See the [docs](https://github.com/intellicode/eslint-plugin-react-native) for more information on how to change the rules.

This will configure ESLint with the following presets/plugins:

-   [TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
-   [Prettier](https://github.com/prettier/eslint-config-prettier)
-   [React](https://github.com/yannickcr/eslint-plugin-react)
-   [React Native](https://github.com/intellicode/eslint-plugin-react-native) rules and globals
-   [React hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

The list of configured rules can be found [here](docs/react-native-typescript.md).

### ESLint Configuration

Create a file called `.eslintrc.js` (or the [file format](https://eslint.org/docs/user-guide/configuring#using-configuration-files-1) of your choosing) with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-native-typescript'],
};
```

## Jest

This will configure ESLint with the following presets/plugins:

-   [Jest](https://github.com/jest-community/eslint-plugin-jest) rules & globals

The list of configured rules can be found [here](docs/jest.md).

### ESLint Configuration

This preset is an add-on to one of the other preset packages and it assumes your test files will be written in TypeScript.
To use this preset, add it to the `extends` property of your config after the main preset.
For example:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-typescript', '@bsokol/eslint-config/jest'],
};
```

## Prettier Configuration

By default, Prettier will use its own defaults, but you can override them by creating a Prettier config file. The following is an **example configuration**.

Create a file called `prettier.config.js` (or the [file format](https://prettier.io/docs/en/configuration.html) of your choosing) with a config similar to this:

```javascript
module.exports = {
    tabWidth: 4,
    printWidth: 100,
    trailingComma: 'es5',
    singleQuote: true,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
```

See the [configuration guide](https://prettier.io/docs/en/configuration.html) for more configuration options.

## Browserslist Configuration

By default, the language features you use in your code will be linted against the available features in the following browserslist configuration ("defaults"):

```text
> 0.5%, last 2 versions, Firefox ESR, not dead
```

For more advanced setup and overrides, follow the instructions in the [browserslist documentation](https://github.com/amilajack/eslint-plugin-compat#3-configure-target-browsers).
