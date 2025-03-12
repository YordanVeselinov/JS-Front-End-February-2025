function manageFlights(flightData) {
    let [flights, statusChanges, statusToCheck] = flightData;
    let flightStatus = {};

    for (let flight of flights) {
        let [flightNumber, destination] = flight.split(" ");
        flightStatus[flightNumber] = { Destination: destination, Status: "Ready to fly" };
    }

    for (let change of statusChanges) {
        let [flightNumber, newStatus] = change.split(" ");
        if (flightStatus[flightNumber]) {
            flightStatus[flightNumber].Status = newStatus;
        }
    }

    if (statusToCheck[0] === "Ready to fly") {
        for (let flight in flightStatus) {
            if (flightStatus[flight].Status === "Ready to fly") {
                console.log(flightStatus[flight]);
            }
        }
    } else {
        for (let flight in flightStatus) {
            if (flightStatus[flight].Status === statusToCheck[0]) {
                console.log(flightStatus[flight]);
            }
        }
    }
}

// Example Usage
manageFlights([
    [
        "WN269 Delaware",
        "FL2269 Oregon",
        "WN498 Las Vegas",
        "WN3145 Ohio",
        "WN612 Alabama",
        "WN4010 New York",
        "WN1173 California",
        "DL2120 Texas",
        "KL5744 Illinois",
        "WN678 Pennsylvania",
    ],
    ["DL2120 Cancelled", "WN612 Cancelled", "WN1173 Cancelled", "SK430 Cancelled"],
    ["Cancelled"],
]);

manageFlights([
    [
        "WN269 Delaware",
        "FL2269 Oregon",
        "WN498 Las Vegas",
        "WN3145 Ohio",
        "WN612 Alabama",
        "WN4010 New York",
        "WN1173 California",
        "DL2120 Texas",
        "KL5744 Illinois",
        "WN678 Pennsylvania",
    ],
    ["DL2120 Cancelled", "WN612 Cancelled", "WN1173 Cancelled", "SK330 Cancelled"],
    ["Ready to fly"],
]);