function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 18)); // this will work correctly
console.log(foo(10,2)); //this will throw an error because of the maximum call stack size exceeded