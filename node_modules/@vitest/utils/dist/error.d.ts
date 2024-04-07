import { DiffOptions } from './diff.js';

declare function serializeError(val: any, seen?: WeakMap<object, any>): any;
declare function processError(err: any, options?: DiffOptions): any;
declare function replaceAsymmetricMatcher(actual: any, expected: any, actualReplaced?: WeakSet<object>, expectedReplaced?: WeakSet<object>): {
    replacedActual: any;
    replacedExpected: any;
};

export { processError, replaceAsymmetricMatcher, serializeError };
