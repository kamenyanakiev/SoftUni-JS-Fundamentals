function convertToJson(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor
  }
  let jsonPerson = JSON.stringify(person);
  console.log(jsonPerson);
}
convertToJson('George', 'Jones', 'Brown');