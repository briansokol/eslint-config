module.exports = {
    tabWidth: 4,
    printWidth: 100,
    trailingComma: 'es5',
    singleQuote: true,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.yml',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
