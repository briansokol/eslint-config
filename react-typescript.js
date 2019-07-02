const baseConfig = require('./base');

module.exports = {
    ...baseConfig,
    extends: [...baseConfig.extends, 'plugin:react/recommended', 'prettier/react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [...baseConfig.plugins, 'jsx-a11y', 'react'],
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
