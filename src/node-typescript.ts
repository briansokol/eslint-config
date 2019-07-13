import { baseConfig } from './base';

module.exports = {
    ...baseConfig,
    env: {
        ...baseConfig.env,
        node: true,
    },
};
