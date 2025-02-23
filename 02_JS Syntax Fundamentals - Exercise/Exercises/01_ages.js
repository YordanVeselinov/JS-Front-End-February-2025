function ages(age) {
    let ageRanges = {
        '0-2': 'baby',
        '3-13': 'child',
        '14-19': 'teenager',
        '20-65': 'adult',
        '66+': 'elder'
    };

    if (age < 0) {
        console.log('out of bounds');
        return;
    }

    if (age >= 0 && age <= 2) {
        console.log(ageRanges['0-2']);
    } else if (age >= 3 && age <= 13) {
        console.log(ageRanges['3-13']);
    } else if (age >= 14 && age <= 19) {
        console.log(ageRanges['14-19']);
    } else if (age >= 20 && age <= 65) {
        console.log(ageRanges['20-65']);
    } else if (age >= 66) {
        console.log(ageRanges['66+']);
    } else {
        console.log('out of bounds');
    }
}


ages(20);
ages(1);
ages(100);
ages(-1);


