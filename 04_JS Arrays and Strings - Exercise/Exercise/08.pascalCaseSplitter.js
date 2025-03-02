function pascalCaseSplitter(text) {
    let words = [];
    let currentWord = text[0];

    for (let i = 1; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            words.push(currentWord);
            currentWord = text[i];
        } else {
            currentWord += text[i];
        }
    }

    words.push(currentWord);
    console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
