"use strict";
// type-cast
const a = document.getElementById("a");
const b = document.getElementById("b");
// inferred type (always button) and !null
const btn = document.querySelector("button");
// arrays
const numArr = [];
const strArr = [];
// generics
const numGenArr = [];
const strGenArr = [];
// union-types
// function add(a: number | string, b: number | string) {
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b; // coercion
    }
    else {
        return +a + +b; // force-conv
    }
}
// using alias
// function printRes(resObj: { val: number; time: Date }) {
// function printRes(resObj: Result) {
function printRes(resObj) {
    console.log(resObj.val, resObj.time);
}
/* --- strict-mode ---
if (btn) {
  btn.addEventListener("click", () => {
    const result = add(+a.value, +b.value); // force-conversion
    console.log(result);
  });
}
*/
btn.addEventListener("click", () => {
    const result = add(+a.value, +b.value); // force-conversion
    numArr.push(result); // type-cast
    const resStr = add(a.value, b.value);
    strArr.push(resStr); // type-cast
    printRes({ val: result, time: new Date() });
    console.log(numArr, strArr);
});
// Promises : Generics
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise-resolved");
    }, 1500);
});
prom
    .then((resp) => {
    console.log(resp.split("-")); // string-oper
})
    .catch();
