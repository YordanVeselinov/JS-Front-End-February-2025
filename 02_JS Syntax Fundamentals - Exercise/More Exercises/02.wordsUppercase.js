function wordsUppercase(text) {
    let words = text.match(/\w+/g);
    
    let result = words.map(word => word.toUpperCase()).join(', ');
    
    console.log(result);
}


wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
