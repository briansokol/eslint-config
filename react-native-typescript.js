'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const base_1 = __importDefault(require('./base'));
module.exports = {
    ...base_1.default,
    extends: [...base_1.default.extends, 'plugin:react/recommended', 'prettier/react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [...base_1.default.plugins, 'react', 'react-hooks', 'react-native'],
    parserOptions: {
        ...base_1.default.parserOptions,
        ecmaFeatures: {
            ...base_1.default.parserOptions.ecmaFeatures,
            jsx: true,
        },
    },
    env: {
        ...base_1.default.env,
        'react-native/react-native': true,
    },
    rules: {
        ...base_1.default.rules,
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/sort-styles': 'off',
        'react-native/split-platform-components': 'warn',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
    },
};
