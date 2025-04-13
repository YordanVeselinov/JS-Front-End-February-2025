function superheroAlliance(input) {
    let superheroes = {};
    let numberOfSuperheroes = parseInt(input.shift());


    for (let i = 0; i < numberOfSuperheroes; i++) {
        let [name, powers, energy] = input.shift().split('-');
        superheroes[name] = { powers: powers.split(','), energy: parseInt(energy) };
    }


    let command = input.shift();
    while (command !== "Evil Defeated!") {
        let parts = command.split(' * ');
        let action = parts[0];
        let superheroName = parts[1];

        if (action === "Use Power") {
            let superpower = parts[2];
            let energyRequired = parseInt(parts[3]);

            if (superheroes[superheroName].powers.includes(superpower) && superheroes[superheroName].energy >= energyRequired) {
                superheroes[superheroName].energy -= energyRequired;
                console.log(`${superheroName} has used ${superpower} and now has ${superheroes[superheroName].energy} energy!`);
            } else {
                console.log(`${superheroName} is unable to use ${superpower} or lacks energy!`);
            }
        } else if (action === "Train") {
            let trainingEnergy = parseInt(parts[2]);

            if (superheroes[superheroName].energy === 100) {
                console.log(`${superheroName} is already at full energy!`);
            } else {
                let energyGained = Math.min(100 - superheroes[superheroName].energy, trainingEnergy);
                superheroes[superheroName].energy += energyGained;
                console.log(`${superheroName} has trained and gained ${energyGained} energy!`);
            }
        } else if (action === "Learn") {
            let newSuperpower = parts[2];

            if (superheroes[superheroName].powers.includes(newSuperpower)) {
                console.log(`${superheroName} already knows ${newSuperpower}.`);
            } else {
                superheroes[superheroName].powers.push(newSuperpower);
                console.log(`${superheroName} has learned ${newSuperpower}!`);
            }
        }

        command = input.shift(); // Get next command
    }

    for (let superhero in superheroes) {
        console.log(`Superhero: ${superhero}`);
        console.log(`- Superpowers: ${superheroes[superhero].powers.join(', ')}`);
        console.log(`- Energy: ${superheroes[superhero].energy}`);
    }
}

let input =  ([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
])


superheroAlliance(input);
