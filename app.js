"use strict";
// type-cast
var a = document.getElementById("a");
var b = document.getElementById("b");
// inferred type (always button) and !null
var btn = document.querySelector("button");
// arrays
var numArr = [];
var strArr = [];
// union-types
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
btn.addEventListener("click", function () {
    var result = add(+a.value, +b.value); // force-conversion
    numArr.push(result); // type-cast
    var resStr = add(a.value, b.value);
    strArr.push(resStr); // type-cast
    printRes({ val: result, time: new Date() });
    console.log(numArr, strArr);
});
