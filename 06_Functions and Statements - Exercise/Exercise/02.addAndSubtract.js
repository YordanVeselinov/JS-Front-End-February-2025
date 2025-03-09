function addAndSubtract(a, b, c) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(total, z) {
        return total - z;
    }

    return subtract(sum(a, b), c);
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));
