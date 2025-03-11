function printDNA(length) {
    const sequence = "ATCGTTAGGG";
    let index = 0;

    for (let i = 0; i < length; i++) {
        const row = i % 4;
        const firstChar = sequence[index % sequence.length];
        const secondChar = sequence[(index + 1) % sequence.length];

        switch (row) {
        case 0:
            console.log(`**${firstChar}${secondChar}**`);
            break;
        case 1:
            console.log(`*${firstChar}--${secondChar}*`);
            break;
        case 2:
            console.log(`${firstChar}----${secondChar}`);
            break;
        case 3:
            console.log(`*${firstChar}--${secondChar}*`);
            break;
        }

        index += 2; 
    }
}

printDNA(4);
printDNA(10);