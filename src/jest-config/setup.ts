import 'jest-preset-angular';
import './globalMocks';

require('babel-plugin-require-context-hook/register')();

Object.defineProperty(global, 'Promise', {writable: false, value: global.Promise});
