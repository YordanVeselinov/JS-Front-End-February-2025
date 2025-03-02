function stringSubstring(word, text) {
    let words = text.toLowerCase().split(' ');

    if (words.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
