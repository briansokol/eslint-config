const baseConfig = require('./base');

module.exports = {
    ...baseConfig,
    extends: [...baseConfig.extends, 'plugin:react/recommended', 'prettier/react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [...baseConfig.plugins, 'react', 'react-native'],
    parserOptions: {
        ...baseConfig.parserOptions,
        ecmaFeatures: {
            ...baseConfig.parserOptions.ecmaFeatures,
            jsx: true,
        },
    },
    env: {
        ...baseConfig.env,
        'react-native/react-native': true,
    },
};
