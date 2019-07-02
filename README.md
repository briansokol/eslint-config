# @bsokol/eslint-config

I created this library to make it easier for me to stand up a new project. It uses sensible recommended defaults, in addition to some of my personal preferences. You can override the various rules by altering your ESLint config file.

This project uses itself for linting and formatting.

## Prerequisites

You must install the following peer dependencies:

-   ESLint @ `^5`
-   Prettier @ `^1.18`
-   TypeScript @ `^2.8` or `^3`

The exact versions may depend on your existing installation or needs. Here is an example command to install the latest versions:

```bash
npm install eslint@^5 prettier@^1.18 typescript@^3 --save-dev
```

```bash
yarn add eslint@^5 prettier@^1.18 typescript@^3 --dev
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

-   TypeScript
-   Prettier
-   React
-   React Native
-   JSX a11y
-   Jest
-   Browser/CommonJS globals

### ESLint Configuration

Create a file called `.eslintrc.js` (or the [file format](https://eslint.org/docs/user-guide/configuring) of your choosing) with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-typescript'],
};
```

ESlint will detect the installed React version, but you can override the version if necessary:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-typescript'],
    settings: {
        react: {
            version: '16.8.0',
        },
    },
};
```

## Node + TypeScript

This will configure ESLint with the following presets/plugins:

-   TypeScript
-   Prettier
-   Jest
-   Node globals

### ESLint Configuration

Create a file called `.eslintrc.js` (or the [file format](https://eslint.org/docs/user-guide/configuring) of your choosing) with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/node-typescript'],
};
```

## React Native + TypeScript

_NOTE:_ This configuration is **EXPERIMENTAL**. I haven't had a chance to really use it in a React Native project. The plugin is configured, but the rules are not enabled by default. See the [docs](https://github.com/intellicode/eslint-plugin-react-native) for more information on how to enable the rules.

This will configure ESLint with the following presets/plugins:

-   TypeScript
-   Prettier
-   React
-   React Native
-   Jest
-   React Native globals

### ESLint Configuration

Create a file called `.eslintrc.js` (or the [file format](https://eslint.org/docs/user-guide/configuring) of your choosing) with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-native-typescript'],
};
```

## Prettier Configuration

By default, Prettier will use its own defaults, but you can override them by creating a Prettier config file. The following is an example configuration.

Create a file called `prettier.config.js` (or the [file format](https://prettier.io/docs/en/configuration.html) of your choosing) with a config like this:

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
