function grades(grade) {
     if (Number(grade) < 3) {
         console.log('Fail');
     } else if (Number(grade) >= 3 && Number(grade) <  3.5){
         console.log('Poor');
     } else if (Number(grade) >= 3.50 && Number(grade) < 4.5){
         console.log('Good');
     } else if (Number(grade) >= 4.5 && Number(grade) < 5.5){
         console.log('Very good');
     } else if (Number(grade) >= 5.50 && Number(grade) <= 6){
         console.log('Excellent');
     }
}
grades(3.33);