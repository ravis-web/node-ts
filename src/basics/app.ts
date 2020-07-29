// type-cast
const a = document.getElementById("a") as HTMLInputElement;
const b = document.getElementById("b") as HTMLInputElement;

// inferred type (always button) and !null
const btn = document.querySelector("button")!;

// arrays
const numArr: number[] = [];
const strArr: string[] = [];

// generics
const numGenArr: Array<number> = [];
const strGenArr: Array<string> = [];

// aliases
type NumStr = number | string;
type Result = { val: number; time: Date };

// interface
interface ResObj {
  val: number;
  time: Date;
}

// union-types
// function add(a: number | string, b: number | string) {
function add(a: NumStr, b: NumStr) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b; // coercion
  } else {
    return +a + +b; // force-conv
  }
}

// using alias
// function printRes(resObj: { val: number; time: Date }) {
// function printRes(resObj: Result) {
function printRes(resObj: ResObj) {
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

// Promises : Generics
const prom = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("promise-resolved");
  }, 1500);
});

prom
  .then((resp) => {
    console.log(resp.split("-")); // string-oper
  })
  .catch();
