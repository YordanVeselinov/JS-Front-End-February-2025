function checkSign(numOne, numTwo, numThree) {
    let negatives = 0;

    if (numOne < 0) negatives++;
    if (numTwo < 0) negatives++;
    if (numThree < 0) negatives++;

    return negatives % 2 === 0 ? "Positive" : "Negative";
}

console.log(checkSign(5, 12, -15)); 
console.log(checkSign(-6, -12, 14));
console.log(checkSign(-1, -2, -3)); 
console.log(checkSign(-5, 1, 1));  
