function spellbookUnraveling(input) {
    let spell = input.shift();

    for (let command of input) {
        let [action, arg1, arg2] = command.split("!");

        switch (action) {
            case "RemoveEven":
                spell = spell.split('').filter((char, index) => index % 2 === 0).join('');
                console.log(spell);
                break;
            case "TakePart":
               let numArg1 = Number(arg1);
               let numArg2 = Number(arg2);
               if(numArg1 > 0 || numArg2 > 0) {
               spell = spell.slice(numArg1, numArg2)
               }
               console.log(spell)
                break;
            case "Reverse":
                if (spell.includes(arg1)) {
                    let reversedSub = arg1.split('').reverse().join('');
                    spell = spell.replace(arg1, '');
                    spell += reversedSub;
                    console.log(spell);
                }else{
                    console.log('Error');
                }
                break;
        }
    }

    console.log(`The concealed spell is: ${spell}`);
}

// let input = [
//     "",  
//     "RemoveEven",   
//     "TakePart!1!9", 
//     "Reverse!maz",       
//     "End"]

    // let input = [
    //     "123456789",  
    //     "RemoveEven",   
    //     "TakePart!1!9", 
    //     "Reverse!maz",       
    //     "End"]

let input = [
    "hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"
];

// let input = [
//         "oaxsestwrsodVne1haGnanbvcaploL2u2a2n2i2m",
//         "Reverse!oaxsestwrsodV",
//         "TakePart!27!39",
//         "RemoveEven",  
//         "End"
//     ]
   

    spellbookUnraveling(input);
