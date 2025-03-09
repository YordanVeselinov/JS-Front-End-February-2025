function factorialDivision(num1, num2) {
    let factorial = (num) => {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      return result;
    };
  
    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);
    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
  }
  

factorialDivision(5,2)
factorialDivision(6,2)