function spiceMustFlow(startingYield) {
    let daysOperated = 0;
    let totalSpice = 0;
    let currentYield = startingYield;

    while (currentYield >= 100) {
        daysOperated++;
        totalSpice += currentYield;
        
        if (totalSpice >= 26) {
            totalSpice -= 26;
        }
        
        currentYield -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(daysOperated);
    console.log(totalSpice);
}


spiceMustFlow(111);
spiceMustFlow(450);
spiceMustFlow(8938);
