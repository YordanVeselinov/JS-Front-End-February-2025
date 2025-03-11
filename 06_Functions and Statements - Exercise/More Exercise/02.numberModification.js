function modifyNumber(number) {
    let num = number.toString();

    function averageOfDigits(num) {
        const digits = num.split('').map(Number);
        const sum = digits.reduce((acc, digit) => acc + digit, 0);
        return sum / digits.length;
    }

    while (averageOfDigits(num) <= 5) {
        num += '9';
    }

    console.log(num);
}



modifyNumber(101);
modifyNumber(5835);

