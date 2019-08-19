function thePyramidOfKingDjoser(base, increment) {
  let material = {
    stone: 0,
    marble: 0,
    lapis: 0,
    gold: 0
  };
  let floorCounter = 0;
  for (let i = 0; base > 0; i++) {
    floorCounter++;
    if (base === 2 || base === 1) {
      material.gold += base * base * increment;
      break;
    }
    if (floorCounter % 5 === 0) {
      material.stone += (base * base - (base * 4 - 4)) * increment;
      material.lapis += (base * 4 - 4) * increment;
    } else {
      material.stone += (base * base - (base * 4 - 4)) * increment;
      material.marble += (base * 4 - 4) * increment;
    }
    base -= 2;
  }
  console.log(`Stone required: ${Math.ceil(material.stone)}`);
  console.log(`Marble required: ${Math.ceil(material.marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(material.lapis)}`);
  console.log(`Gold required: ${Math.ceil(material.gold)}`);
  console.log(`Final pyramid height: ${Math.floor(floorCounter * increment)}`);
}
thePyramidOfKingDjoser(11, 0.75);