function manageParkingLot(actions) {
    let parkingLot = new Set();

    for (let action of actions) {
        let [direction, carNumber] = action.split(", ");
        if (direction === "IN") {
            parkingLot.add(carNumber);
        } else if (direction === "OUT") {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedCars = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
        sortedCars.forEach((car) => console.log(car));
    }
}

manageParkingLot([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);

manageParkingLot([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "OUT, CA1234TA",
]);