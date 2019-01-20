const baseConfig = require('./base');

module.exports = {
    ...baseConfig,
    extends: [
        ...baseConfig.extends,
        'plugin:react/recommended',
        'prettier/react',
    ],
    settings: {
        react: {
            version: '16.7.0',
        },
    },
    plugins: [...baseConfig.plugins, 'react'],
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
};
