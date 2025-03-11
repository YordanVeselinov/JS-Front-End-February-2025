function processCrystals(input) {
    const targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let thickness = input[i];
        console.log(`Processing chunk ${thickness} microns`);

        const operations = [
        { name: "Cut", action: (x) => x / 4, check: (x) => x >= targetThickness * 4 },
        { name: "Lap", action: (x) => x * 0.8, check: (x) => x >= targetThickness * 1.2 },
        { name: "Grind", action: (x) => x - 20, check: (x) => x >= targetThickness + 20 },
        { name: "Etch", action: (x) => x - 2, check: (x) => x >= targetThickness + 2 },
        ];

        for (const op of operations) {
        let count = 0;
        while (op.check(thickness)) {
            thickness = op.action(thickness);
            count++;
        }
        if (count > 0) {
            console.log(`${op.name} x${count}`);
            thickness = Math.floor(thickness);
            console.log("Transporting and washing");
        }
        }

        if (thickness === targetThickness - 1) {
        thickness += 1;
        console.log("X-ray x1");
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }
}

processCrystals([1375, 50000]);
processCrystals([1000, 4000, 8100]);