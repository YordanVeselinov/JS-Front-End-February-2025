function isPalindrome(numbers) {
    for (let num of numbers) {
        let numStr = num.toString();
        let reversedStr = numStr.split('').reverse().join('');
        console.log(numStr === reversedStr);
    }
}

isPalindrome([123, 323, 421, 121]);
isPalindrome([32, 2, 232, 1010]);
