function reverseNElements(n, arr) {
    let newArr = arr.slice(0, n);
    newArr.reverse();
    console.log(newArr.join(" "));
}

reverseNElements(3, [10, 20, 30, 40, 50]); 
reverseNElements(4, [-1, 20, 99, 5]); 
reverseNElements(2, [66, 43, 75, 89, 47]);