import baseConfig from './base';

module.exports = {
    ...baseConfig,
    extends: [
        ...baseConfig.extends,
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
    plugins: [...baseConfig.plugins, 'jsx-a11y', 'react', 'react-hooks'],
    parserOptions: {
        ...baseConfig.parserOptions,
        ecmaFeatures: {
            ...baseConfig.parserOptions.ecmaFeatures,
            jsx: true,
        },
    },
    env: {
        ...baseConfig.env,
        browser: true,
        commonjs: true,
    },
    rules: {
        ...baseConfig.rules,
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
};
