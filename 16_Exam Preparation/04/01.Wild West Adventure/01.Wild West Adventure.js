function wildWestAdventure(input) {
    let heroes = {};
    let numberOfHeroes = parseInt(input.shift()); 


    for (let i = 0; i < numberOfHeroes; i++) {
        let [name, HP, bullets] = input.shift().split(' ');
        heroes[name] = { HP: parseInt(HP), Bullets: parseInt(bullets) };
    }

    let command = input.shift();
    while (command !== "Ride Off Into Sunset") {
        let parts = command.split(' - ');
        let action = parts[0];
        let heroName = parts[1];

        if (action === "FireShot") {
            let target = parts[2];
            if (heroes[heroName].Bullets > 0) {
                heroes[heroName].Bullets -= 1;
                console.log(`${heroName} has successfully hit ${target} and now has ${heroes[heroName].Bullets} bullets!`);
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (action === "TakeHit") {
            let damage = parseInt(parts[2]);
            let attacker = parts[3];
            heroes[heroName].HP -= damage;
            if (heroes[heroName].HP > 0) {
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${heroes[heroName].HP} HP!`);
            } else {
                console.log(`${heroName} was gunned down by ${attacker}!`);
                delete heroes[heroName];
            }
        } else if (action === "Reload") {
            if(heroes[heroName].Bullets < 6) {
                console.log(`${heroName} reloaded ${6 - heroes[heroName].Bullets} bullets!`);
                heroes[heroName].Bullets = 6;  
            }else {
                console.log(`${heroName}'s pistol is fully loaded!`);

            }
            
        } else if (action === "PatchUp") {
            let amount = parseInt(parts[2]);
            let recovered = 100 - heroes[heroName].HP
            if(recovered > amount) {
                recovered = amount
            }
            if(heroes[heroName].HP < 100) {
                console.log(`${heroName} patched up and recovered ${recovered} HP!`);
                heroes[heroName].HP = Math.min(heroes[heroName].HP + amount, 100);
            }else {
                console.log(`${heroName} is in full health!`);

            }
            
           
        }

        command = input.shift(); 
    }

    for (let hero in heroes) {
        console.log(`${hero}\n HP: ${heroes[hero].HP}\n Bullets: ${heroes[hero].Bullets}`);
    }
}
wildWestAdventure(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])

