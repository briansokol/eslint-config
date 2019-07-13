'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const base_1 = require('./base');
module.exports = Object.assign({}, base_1.baseConfig, {
    env: Object.assign({}, base_1.baseConfig.env, { node: true }),
});
