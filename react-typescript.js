'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const base_1 = require('./base');
module.exports = Object.assign(Object.assign({}, base_1.baseConfig), {
    extends: [
        ...base_1.baseConfig.extends,
        'plugin:react/recommended',
        'prettier/react',
        'plugin:jsx-a11y/recommended',
        'plugin:compat/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [...base_1.baseConfig.plugins, 'jsx-a11y', 'react', 'react-hooks'],
    parserOptions: Object.assign(Object.assign({}, base_1.baseConfig.parserOptions), {
        ecmaFeatures: Object.assign(
            Object.assign({}, base_1.baseConfig.parserOptions.ecmaFeatures),
            { jsx: true }
        ),
    }),
    env: Object.assign(Object.assign({}, base_1.baseConfig.env), { browser: true, commonjs: true }),
    rules: Object.assign(Object.assign({}, base_1.baseConfig.rules), {
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    }),
});
