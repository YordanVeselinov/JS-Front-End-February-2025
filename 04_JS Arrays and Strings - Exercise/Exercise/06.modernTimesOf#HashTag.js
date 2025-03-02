function modernTimesOfHashTag(sentence) {
    let words = sentence.split(' ');

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let cleanWord = word.substring(1);
            
            if (/^[A-Za-z]+$/.test(cleanWord)) {
                console.log(cleanWord);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
