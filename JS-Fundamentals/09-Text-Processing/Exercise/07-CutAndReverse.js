function cutAndReverse(string) {
    let reverseString = string.split('').reverse();
    let firstHalf = reverseString.splice(0, reverseString.length / 2);
    console.log(reverseString.join(''));
    console.log(firstHalf.join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')