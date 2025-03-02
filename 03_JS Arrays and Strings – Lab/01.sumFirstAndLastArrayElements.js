function sumFirstAndLast(arr) {
    if (arr.length === 0) return 0; 
    return arr[0] + arr[arr.length - 1];
}

console.log(sumFirstAndLast([20, 30, 40])); 
console.log(sumFirstAndLast([10, 17, 22, 33])); 
console.log(sumFirstAndLast([11, 58, 69])); 