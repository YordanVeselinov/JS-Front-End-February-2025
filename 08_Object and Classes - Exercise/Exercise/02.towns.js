function createTownObjects(townRows) {
    let towns = [];

    for (let row of townRows) {
        let [town, latitude, longitude] = row.split(" | ");

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObject = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        };

        towns.push(townObject);
    }

    for (let town of towns) {
        console.log(town);
    }
}


createTownObjects([
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
]);

createTownObjects(["Plovdiv | 136.45 | 812.575"]);