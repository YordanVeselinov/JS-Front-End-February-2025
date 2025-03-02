function pyramidConstruction(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    
    while (base > 0) {
        height++;
        let outerLayer = base * 4 - 4;
        let innerLayer = (base - 2) * (base - 2);

        if (base === 1 || base === 2) {
            gold += base * base * increment;
            break;
        } 
        
        if (height % 5 === 0) {
            lapis += outerLayer * increment;
        } else {
            marble += outerLayer * increment;
        }

        stone += innerLayer * increment;
        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}

pyramidConstruction(11, 1);
pyramidConstruction(12, 1);
pyramidConstruction(23, 0.5);
