class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        return this.storage.map((product) => JSON.stringify(product)).join("\n");
    }
}

// Example Usage
let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

let productOne2 = { name: "Tomato", price: 0.9, quantity: 19 };
let productTwo2 = { name: "Potato", price: 1.1, quantity: 10 };
let storage2 = new Storage(30);
storage2.addProduct(productOne2);
storage2.addProduct(productTwo2);
console.log(storage2.totalCost);