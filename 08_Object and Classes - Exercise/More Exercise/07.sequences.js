function manageSequences(input) {
    let uniqueArrays = new Set();

    for (let json of input) {
        let array = JSON.parse(json).sort((a, b) => b - a);
        let arrayString = JSON.stringify(array);
        uniqueArrays.add(arrayString);
    }

    let sortedArrays = Array.from(uniqueArrays)
        .map((str) => JSON.parse(str))
        .sort((a, b) => a.length - b.length);

    for (let array of sortedArrays) {
        console.log(`[${array.join(", ")}]`);
    }
}

// Example Usage
manageSequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
]);

manageSequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]",
]);