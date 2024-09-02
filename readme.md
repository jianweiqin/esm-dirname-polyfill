# esm-dirname-polyfill

Polyfill of the `import.meta.dirname` and `import.meta.filename`.

## Install

    > npm install esm-dirname-polyfill

## Getting started

```js
// test.js
console.log("In test.js:");
console.log(import.meta.dirname);	// undefined if Node.js < v20.11
console.log(import.meta.filename);	// undefined if Node.js < v20.11

import polyfill from "esm-dirname-polyfill";

const {__dirname, __filename} = polyfill(import.meta);

console.log("After polyfill:");
console.log(__dirname);
console.log(__filename);
console.log(import.meta.dirname);   // polyfilled
console.log(import.meta.filename);  // polyfilled

import "./subdir/test.js";	// still outputs first
```

```js
// subdir/test.js
import polyfill from "esm-dirname-polyfill";

const {__dirname, __filename} = polyfill(import.meta);

console.log("In test-1.js:");

console.log(__dirname);
console.log(__filename);
console.log(import.meta.dirname);   // polyfilled
console.log(import.meta.filename);  // polyfilled

console.log();
```

```
// outputs

In subdir/test.js:
/absolute/path/to/esm-dirname-polyfill/tests/subdir
/absolute/path/to/esm-dirname-polyfill/tests/subdir/test.js
/absolute/path/to/esm-dirname-polyfill/tests/subdir
/absolute/path/to/esm-dirname-polyfill/tests/subdir/test.js


In test.js:
undefined
undefined
After polyfill:
/absolute/path/to/esm-dirname-polyfill/tests
/absolute/path/to/esm-dirname-polyfill/tests/test.js
/absolute/path/to/esm-dirname-polyfill/tests
/absolute/path/to/esm-dirname-polyfill/tests/test.js
```

## API

### Syntax

```js
const {__dirname, __filename} = polyfill(importMeta);
```

Polyfills the `import.meta.dirname` and `import.meta.filename`.

### Parameters

- `importMeta` [required] {object}. The `import.meta`.

### Returns

Type: object {__dirname, __filename}

An object containing two properties showing above. Easily destructuring.

License
-------

MIT
