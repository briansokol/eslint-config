import baseConfig from './base';

module.exports = {
    ...baseConfig,
    extends: [...baseConfig.extends, 'plugin:react/recommended', 'prettier/react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [...baseConfig.plugins, 'react', 'react-hooks', 'react-native'],
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
    rules: {
        ...baseConfig.rules,
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
