function vacation(group, type, day) {
  let price = 0;
  if (type === 'Students') {
    if (day === 'Friday') {
      price = 8.45;
    } else if (day === 'Saturday') {
      price = 9.80;
    } else if (day === 'Sunday') {
      price = 10.46;
    }
  } else if (type === 'Business') {
    if (day === 'Friday') {
      price = 10.90;
    } else if (day === 'Saturday') {
      price = 15.60;
    } else if (day === 'Sunday') {
      price = 16;
    }
  } else if (type === 'Regular') {
    if (day === 'Friday') {
      price = 15;
    } else if (day === 'Saturday') {
      price = 20;
    } else if (day === 'Sunday') {
      price = 22.50;
    }
  }
  if (type === 'Students' && group >= 30) {
    price *= group;
    price *= 0.85;
  } else if (type === 'Business' && group >= 100) {
    price = price * (group - 10);
  } else if (type === 'Regular' && group >= 10 && group <= 20) {
    price *= group;
    price *= 0.95;
  } else {
    price *= group;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, 'Students', 'Sunday');