function convertToObject(json) {
  let parsedInfo = JSON.parse(json);
  for (const key in parsedInfo) {
    console.log(`${key}: ${parsedInfo[key]}`);
  }
}
convertToObject('{"name":"George", "age":40, "town":"Sofia"}');