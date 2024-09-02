import polyfill from "esm-dirname-polyfill";

const {__dirname, __filename} = polyfill(import.meta);

console.log("In subdir/test.js:");

console.log(__dirname);
console.log(__filename);
console.log(import.meta.dirname);
console.log(import.meta.filename);

console.log();
