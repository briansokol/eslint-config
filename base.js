'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    env: {
        node: true,
        es6: true,
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-alert': 'warn',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-catch-shadow': 'error',
        'no-console': [
            'error',
            {
                allow: ['log', 'error'],
            },
        ],
        'no-eq-null': 'error',
        'no-extra-bind': 'error',
        'no-negated-condition': 'off',
        'no-restricted-imports': ['error', 'lodash'],
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'warn',
        'no-use-before-define': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: true,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'prefer-object-spread': 'error',
        'prefer-rest-params': 'error',
        'require-atomic-updates': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-import': [
            'error',
            {
                tryExtensions: ['.ts', '.js', '.json', '.node'],
            },
        ],
    },
};
