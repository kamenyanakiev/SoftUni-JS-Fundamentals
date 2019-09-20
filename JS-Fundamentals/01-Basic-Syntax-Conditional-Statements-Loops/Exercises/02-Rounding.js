function rounding(number, fixed) {
    fixed > 15 ? fixed = 15 : fixed = fixed;
    console.log(Number(number.toFixed(fixed)));
}

rounding(10.5, 3);