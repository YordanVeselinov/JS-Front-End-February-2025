
function simpleCalculator(x, y, operator){
    const calculator = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };


    console.log(calculator[operator](x, y))
}



simpleCalculator(5, 5, 'multiply');   
simpleCalculator(40, 8, 'divide');    
simpleCalculator(12, 19, 'add');      
simpleCalculator(50, 13, 'subtract'); 
