const baseConfig = require('./base');

module.exports = {
    ...baseConfig,
    env: {
        ...baseConfig.env,
        node: true,
    },
};
