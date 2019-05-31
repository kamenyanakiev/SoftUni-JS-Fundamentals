function rightPlace(string, replacement, match) {
  let replacedString = string.replace('_', replacement);
  replacedString === match ? console.log('Matched') : console.log('Not Matched');  
}
rightPlace('Str_ng', 'i', 'String');