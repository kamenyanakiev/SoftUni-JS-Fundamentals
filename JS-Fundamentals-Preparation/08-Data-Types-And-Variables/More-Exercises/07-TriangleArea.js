function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  console.log((Math.sqrt(s*(s-a)*(s-b)*(s-c))));
}
triangleArea(2, 3.5, 4);