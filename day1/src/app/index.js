let add = (a, b) => a + b;

console.log();

document.write(add(5, 9));

document.write("Hi there!");
console.log(add(5, 990));

class TestClass {
  constructor() {
    let msg = "Using ES2015+ syntax";
    console.log(msg);
  }
}

let test = new TestClass();

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

const {
  a,
  b,
  ...k
} = obj;
console.log(k);

