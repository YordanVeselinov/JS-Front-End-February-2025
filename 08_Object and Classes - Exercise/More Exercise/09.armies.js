function manageArmies(commands) {
    let armies = {};

    for (let command of commands) {
        if (command.endsWith(" arrives")) {
            let leader = command.split(" arrives")[0];
            if (!armies[leader]) {
                armies[leader] = { total: 0, armies: {} };
            }
        } else if (command.includes(": ")) {
            let [leader, armyInfo] = command.split(": ");
            let [armyName, armyCount] = armyInfo.split(", ");
            if (armies[leader]) {
                armies[leader].armies[armyName] = Number(armyCount);
                armies[leader].total += Number(armyCount);
            }
        } else if (command.includes(" + ")) {
            let [armyName, armyCount] = command.split(" + ");
            for (let leader in armies) {
                if (armies[leader].armies[armyName]) {
                    armies[leader].armies[armyName] += Number(armyCount);
                    armies[leader].total += Number(armyCount);
                }
            }
        } else if (command.endsWith(" defeated")) {
            let leader = command.split(" defeated")[0];
            delete armies[leader];
        }
    }

    let sortedLeaders = Object.entries(armies).sort((a, b) => b[1].total - a[1].total);

    for (let [leader, data] of sortedLeaders) {
        console.log(`${leader}: ${data.total}`);
        let sortedArmies = Object.entries(data.armies).sort((a, b) => b[1] - a[1]);
        for (let [armyName, armyCount] of sortedArmies) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }
}

// Example Usage
manageArmies([
    "Rick Burr arrives",
    "Fergus: Wexamp, 30245",
    "Rick Burr: Juard, 50000",
    "Findlay arrives",
    "Findlay: Britox, 34540",
    "Wexamp + 6000",
    "Juard + 1350",
    "Britox + 4500",
    "Porter arrives",
    "Porter: Legion, 55000",
    "Legion + 302",
    "Rick Burr defeated",
    "Porter: Retix, 3205",
]);

manageArmies([
    "Rick Burr arrives",
    "Findlay arrives",
    "Rick Burr: Juard, 1500",
    "Wexamp arrives",
    "Findlay: Wexamp, 34540",
    "Wexamp + 340",
    "Wexamp: Britox, 1155",
    "Wexamp: Juard, 43423",
]);