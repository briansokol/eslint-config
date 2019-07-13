'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const base_1 = require('./base');
module.exports = Object.assign({}, base_1.baseConfig, {
    extends: [...base_1.baseConfig.extends, 'plugin:react/recommended', 'prettier/react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [...base_1.baseConfig.plugins, 'react', 'react-hooks', 'react-native'],
    parserOptions: Object.assign({}, base_1.baseConfig.parserOptions, {
        ecmaFeatures: Object.assign({}, base_1.baseConfig.parserOptions.ecmaFeatures, {
            jsx: true,
        }),
    }),
    env: Object.assign({}, base_1.baseConfig.env, { 'react-native/react-native': true }),
    rules: Object.assign({}, base_1.baseConfig.rules, {
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/sort-styles': 'off',
        'react-native/split-platform-components': 'warn',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
    }),
});
