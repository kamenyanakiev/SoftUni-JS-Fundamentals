function charactersInRange(firstChar, secondChar) {
  let result = '';
  let firstCharCode = firstChar.charCodeAt(0);
  let secondCharCode = secondChar.charCodeAt(0);
  if (firstCharCode < secondCharCode) {
    for (let i = firstCharCode + 1; i < secondCharCode; i++) {
      result += `${String.fromCharCode(i)} `;
    }
  } else {
    for (let i = secondCharCode + 1; i < firstCharCode; i++) {
      result += `${String.fromCharCode(i)} `;
    }
  }
  console.log(result);
}
charactersInRange ('a', 'd');