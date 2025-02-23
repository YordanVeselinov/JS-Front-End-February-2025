function fruit(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let totalPrice = weightInKg * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

    
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
