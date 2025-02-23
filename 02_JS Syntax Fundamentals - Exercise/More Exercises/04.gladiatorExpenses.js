function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreakCount = 0;

    for (let fight = 1; fight <= lostFights; fight++) {
        let helmetBroken = fight % 2 === 0;
        let swordBroken = fight % 3 === 0;

        if (helmetBroken) {
            expenses += helmetPrice;
        }
        
        if (swordBroken) {
            expenses += swordPrice;
        }

        if (helmetBroken && swordBroken) {
            expenses += shieldPrice;
            shieldBreakCount++;

            if (shieldBreakCount % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
