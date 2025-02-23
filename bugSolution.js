function foo(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp; 
  }
  return a;
}

console.log(foo(12, 18)); // this will work correctly
console.log(foo(10,2)); // this will also work correctly