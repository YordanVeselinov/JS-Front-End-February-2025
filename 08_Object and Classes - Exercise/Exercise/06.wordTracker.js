function trackWords(input) {
    let wordsToTrack = input[0].split(" ");
    let text = input.slice(1);
    let wordCounts = {};

    for (let word of wordsToTrack) {
        wordCounts[word] = 0;
    }

    for (let word of text) {
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        }
    }

    let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

trackWords([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);

trackWords([
    "is the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "the",
    "And",
    "finally",
    "the",
    "the",
    "sentence",
]);