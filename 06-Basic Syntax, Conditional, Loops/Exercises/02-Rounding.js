function rounding(number, fixed) {
fixed > 15 ? fixed = 15 : fixed = fixed;
  console.log(Number(number.toFixed(fixed)));
}
//rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);