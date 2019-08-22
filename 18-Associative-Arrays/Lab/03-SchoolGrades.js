function schoolGrades(array) {
  let students = new Map();
  for (const string of array) {
    const parts = string.split(' ');
    const student = parts.shift();
    let grades = parts.map(Number);
    if (students.has(student)) {
      grades = students.get(student).concat(grades);
    }
    students.set(student, grades);
  }
  let sorted = [...students.entries()]
    .sort((a, b) => {
      return averageGrade(a[1]) - averageGrade(b[1])
    });
  for (const [student, averageGrade] of sorted) {
    console.log(`${student}: ${averageGrade.join(', ')}`);
  }

  function averageGrade(grades) {
    let sum = 0;
    for (let grade of grades) {
      sum += grade
    }
    return sum / grades.length
  }
}
schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);