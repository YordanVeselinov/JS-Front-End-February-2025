function createHeroRegister(heroData) {
    let heroes = [];

    for (let heroString of heroData) {
        let [name, level, items] = heroString.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        let hero = {
            name: name,
            level: level,
            items: items,
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

createHeroRegister([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);

createHeroRegister([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
]);