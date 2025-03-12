function manageGarages(carData) {
    let garages = {};

    for (let entry of carData) {
        let [garageNumber, carInfo] = entry.split(" - ");
        if (!garageNumber || !carInfo) continue;

        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        let carDetails = carInfo.split(", ").reduce((acc, detail) => {
            let [key, value] = detail.split(": ");
            acc[key] = value;
            return acc;
        }, {});
        garages[garageNumber].push(carDetails);
    }

    for (let [garageNumber, cars] of Object.entries(garages)) {
        console.log(`Garage № ${garageNumber}`);
        for (let car of cars) {
            let carDetails = Object.entries(car)
                .map(([key, value]) => `${key} - ${value}`)
                .join(", ");
            console.log(`--- ${carDetails}`);
        }
    }
}

// Example Usage
manageGarages([
    "1 - color: blue, fuel type: diesel",
    "1 - color: red, manufacture: Audi",
    "2 - fuel type: petrol",
    "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);

manageGarages([
    "1 - color: green, fuel type: petrol",
    "1 - color: dark red, manufacture: WV",
    "2 - fuel type: diesel",
    "3 - color: dark blue, fuel type: petrol",
]);