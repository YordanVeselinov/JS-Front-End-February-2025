function carWash(commands) {
    let cleanliness = 0;

    for (let command of commands) {
    if (command === 'soap') {
        cleanliness += 10;
    } else if (command === 'water') {
        cleanliness *= 1.2;
    } else if (command === 'vacuum cleaner') {
        cleanliness *= 1.25;
    } else if (command === 'mud') {
        cleanliness *= 0.90;
    }
    }

    cleanliness = Math.min(cleanliness, 100);
    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}


carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

