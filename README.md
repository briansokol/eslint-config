eslint-config
=============

Installation
------------

```bash
npm install @bsokol/eslint-config
```

React + TypeScript
------------------

Create a file called `eslintrc.js` with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-typescript']
};
```

You may want to override the React version used by the React ESlint plugin.

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/react-typescript']
    settings: {
        react: {
            version: '16.8.0',
        },
    },
};
```

Node + TypeScript
-----------------

Create a file called `eslintrc.js` with this config:

```javascript
module.exports = {
    extends: ['@bsokol/eslint-config/node-typescript']
};
```