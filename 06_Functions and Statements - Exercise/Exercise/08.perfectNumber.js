function isPerfectNumber(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    console.log(sum === num ? "We have a perfect number!" : "It's not so perfect.");
}


isPerfectNumber(6);        
isPerfectNumber(28);       
isPerfectNumber(1236498);  
