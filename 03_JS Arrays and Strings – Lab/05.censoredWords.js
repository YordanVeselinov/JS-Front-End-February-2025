function censorWord(text, word) {
    let censored = '*'.repeat(word.length);
    let index = 0;
    let result = '';

    while (index < text.length) {
        let foundIndex = text.indexOf(word, index);
        if (foundIndex === -1) {
            result += text.substring(index);
            break;
        }

        result += text.substring(index, foundIndex) + censored;
        index = foundIndex + word.length;
    }

    console.log(result);
}



censorWord('A small sentence with some words small', 'small'); 
censorWord('Find the hidden word', 'hidden');  