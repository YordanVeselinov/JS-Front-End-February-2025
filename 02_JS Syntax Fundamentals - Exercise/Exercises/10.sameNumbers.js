function sameNumbers(number) {
    let sum = 0;
    let digits = number.toString().split('');
    let isSame = true;
    

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
        if (digits[0] !== digits[i]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
