import WaterfallFlow from './src/'
/**
 * Resolve ES6 and CommonJS compatibility issues
 * 1. CommonJS code
 *    const WaterfallFlow = require('react-native-waterfall-flow');
 * 2. ES6 code
 *    import WaterfallFlow from 'react-native-waterfall-flow';
 */
module.exports = WaterfallFlow;
module.exports.default = WaterfallFlow;
