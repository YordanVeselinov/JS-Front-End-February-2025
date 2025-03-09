function orders(product, quantity) {
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };

    let total = prices[product] * quantity;
    console.log(total.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
