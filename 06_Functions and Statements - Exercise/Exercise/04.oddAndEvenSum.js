function oddAndEvenSum(number) {
    let numStr = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of numStr) {
        let num = Number(digit);
        num % 2 === 0 ? evenSum += num : oddSum += num;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
