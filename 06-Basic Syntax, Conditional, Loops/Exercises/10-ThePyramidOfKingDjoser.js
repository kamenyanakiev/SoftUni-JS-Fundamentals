function thePyramidOfKingDjoser(base, increment) {
  let material = {
    stone: 0,
    marble: 0,
    lapis: 0,
    gold: 0
  }
  let height = increment;
  for (let i = 0; base > 0; i++) {
    let totalBase = base * base;
    let nextBase = totalBase - ((base - 2) * (base - 2));
    if (base === 2 || base === 1){
      material.gold += (base*base)
    }
    if (height % 5 === 0){
      material.stone += (totalBase - nextBase);
      material.lapis += nextBase;
    } else if (height % 5 !== 0){
      material.stone += (totalBase - nextBase);
      material.marble += nextBase;
    }
    height++;
    base -= 2;
  }
  console.log(`Stone required: ${material.stone}`);
  console.log(`Marble required: ${material.marble}`);
  console.log(`Lapis required: ${material.lapis}`);
  console.log(`Gold required: ${material.gold}`);
  console.log(`Final pyramid height: ${Math.floor((increment * height)-1)}`);
}
thePyramidOfKingDjoser(11, 0.75);