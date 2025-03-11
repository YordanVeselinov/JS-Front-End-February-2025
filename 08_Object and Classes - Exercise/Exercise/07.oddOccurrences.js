function findOddOccurrences(input) {
    let words = input.toLowerCase().split(" ");
    let wordCounts = {};

    for (let word of words) {
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    let oddWords = Object.entries(wordCounts)
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word]) => word);

    console.log(oddWords.join(" "));
}


findOddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
findOddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");