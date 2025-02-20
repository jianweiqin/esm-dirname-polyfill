console.log("In `test.js`:");
console.log(import.meta.dirname);	// undefined if Node.js < v20.11
console.log(import.meta.filename);	// undefined if Node.js < v20.11

import polyfill from "esm-dirname-polyfill";

const {__dirname, __filename} = polyfill(import.meta);

console.log("After polyfill:");
console.log(__dirname);
console.log(__filename);
console.log(import.meta.dirname);
console.log(import.meta.filename);

console.log("End of `test.js`");

import "./subdir/test.js";	// still outputs first
