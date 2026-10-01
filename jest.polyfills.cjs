// react-router 7 needs TextEncoder/TextDecoder, which jsdom does not provide
const { TextEncoder, TextDecoder } = require('util');
Object.assign(globalThis, { TextEncoder, TextDecoder });
