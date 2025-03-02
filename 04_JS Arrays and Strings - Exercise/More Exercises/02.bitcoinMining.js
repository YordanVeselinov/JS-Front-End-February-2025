function bitcoinMining(goldMined) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    let totalMoney = 0;
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;

    for (let i = 0; i < goldMined.length; i++) {
        let dailyGold = goldMined[i];

        if ((i + 1) % 3 === 0) {
            dailyGold *= 0.7;
        }

        totalMoney += dailyGold * goldPricePerGram;

        while (totalMoney >= bitcoinPrice) {
            if (bitcoinsBought === 0) {
                firstBitcoinDay = i + 1;
            }
            totalMoney -= bitcoinPrice;
            bitcoinsBought++;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124])
