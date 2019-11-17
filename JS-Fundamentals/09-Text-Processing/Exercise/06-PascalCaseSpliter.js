function pascalCaseSpliter(string) {
    let result = string.match(/([A-Z]?[^A-Z]*)/g);
    result.pop();
    console.log(result.join(', '));
}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');