function createCatalogue(products) {
    let catalogue = {};

    for (let product of products) {
        let [name, price] = product.split(" : ");
        let initial = name[0];

        if (!catalogue[initial]) {
            catalogue[initial] = [];
        }

        catalogue[initial].push({ name, price: Number(price) });
    }

    let sortedInitials = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (let initial of sortedInitials) {
        console.log(initial);
        catalogue[initial]
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach((product) => console.log(`  ${product.name}: ${product.price}`));
    }
}

// Example Usage
createCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);

createCatalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);