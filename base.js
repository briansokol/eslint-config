'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.baseConfig = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:jest/recommended',
        'plugin:jest/style',
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    env: {
        es6: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
            },
        ],
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
    },
};
