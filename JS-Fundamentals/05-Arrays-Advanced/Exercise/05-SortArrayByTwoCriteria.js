function sortArrayByTwoCriteria(array) {
    array.sort(function (a, b) {
        if ((a.length - b.length) < 0) {
            return -1;
        } else if ((a.length - b.length) > 0) {
            return 1;
        } else if ((a.length - b.length) === 0) {
            return a.localeCompare(b);
        }
    });
    console.log(array.join('\n'));
}
sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);