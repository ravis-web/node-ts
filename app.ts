// type-cast
const a = document.getElementById("a") as HTMLInputElement;
const b = document.getElementById("b") as HTMLInputElement;

// inferred type (always button) and !null
const btn = document.querySelector("button")!;

// arrays
const numArr: number[] = [];
const strArr: string[] = [];

// union-types
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b; // coercion
  } else {
    return +a + +b; // force-conv
  }
}

function printRes(resObj: { val: number; time: Date }) {
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
  numArr.push(result as number); // type-cast
  const resStr = add(a.value, b.value);
  strArr.push(resStr as string); // type-cast
  printRes({ val: result as number, time: new Date() });
  console.log(numArr, strArr);
});
