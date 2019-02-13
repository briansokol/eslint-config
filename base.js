module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'prettier'
    ],
    plugins: ['@typescript-eslint/eslint-plugin', 'jsx-a11y'],
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
        'no-console': [
            'error',
            {
                allow: ['log', 'error'],
            },
        ],
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'typescript/no-unused-vars': 'off',
        'react/prop-types': 'off',
    },
};
