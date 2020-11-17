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
    extends: [
        ...base_1.default.extends,
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
    plugins: [...base_1.default.plugins, 'jsx-a11y', 'react', 'react-hooks'],
    parserOptions: {
        ...base_1.default.parserOptions,
        ecmaFeatures: {
            ...base_1.default.parserOptions.ecmaFeatures,
            jsx: true,
        },
    },
    env: {
        ...base_1.default.env,
        browser: true,
        commonjs: true,
    },
    rules: {
        ...base_1.default.rules,
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
};
