function distinctArray(array) {
    let uniqueArray = [...new Set(array)];
    console.log(uniqueArray.join(' '));
}
distinctArray([1, 2, 3, 4]);